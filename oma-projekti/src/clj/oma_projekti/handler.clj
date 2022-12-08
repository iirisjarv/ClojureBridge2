(ns oma-projekti.handler
  (:require [clojure.string :as s]
            [config.core :refer [env]]
            [hiccup.page :refer [html5 include-css include-js]]
            [oma-projekti.middleware :refer [middleware ring-opts]]
            [reitit.ring :as reitit-ring]))

(def mount-target
  [:div#app
   [:h2 "Welcome to oma-projekti"]
   [:p "please wait while Figwheel/shadow-cljs is waking up ..."]
   [:p "(Check the js console for hints if nothing exciting happens.)"]])

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    mount-target
    (include-js "/js/app.js")]))


(defn index-handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})
(defn form-handler [request]
  (let [parametrit (:params request)
         teksti (:teksti parametrit)
         valinta (:valinta parametrit)
         muutettu-teksti (case valinta
                           "upper" (s/upper-case teksti)
                           "lower" (s/lower-case teksti)
                           teksti)]
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body muutettu-teksti}))

(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
    [["/" {:get {:handler index-handler}}]
     ["/items"
      ["" {:get {:handler index-handler}}]
      ["/:item-id" {:get {:handler index-handler
                          :parameters {:path {:item-id int?}}}}]]
     ["/about" {:get {:handler index-handler}}]
     ["/formi" {:post {:handler form-handler}}]]
    ring-opts)
   
   (reitit-ring/routes
    (reitit-ring/create-resource-handler {:path "/" :root "/public"})
    (reitit-ring/create-default-handler))
   {:middleware middleware}))
