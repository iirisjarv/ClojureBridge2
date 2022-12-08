(ns oma-projekti.api
  (:require [clj-http.client :as client])
  (:import [java.time OffsetDateTime]
           [java.time.format DateTimeFormatter]))

(def forecast-url "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&latitude=60.16952&longitude=24.93545")
(def weather-history-url "https://archive-api.open-meteo.com/v1/era5?hourly=temperature_2m")
(def geocoding-url "https://geocoding-api.open-meteo.com/v1/search?name=")

(defn- api-get [url]
  (:body (client/get url {:as :json})))

(defn get-avg-temp []
  (let [forecast (api-get forecast-url)
                 temperatures (:temperature_2m (:hourly forecast))]
    (/ (reduce + temperatures) (count temperatures))))

(defn get-location [city]
  (let [url (str geocoding-url city)
       location-data (api-get url)]
  (first (:results location-data))))

(defn loading-page [request]
  (let [city (:city (:path-params request))
        location (get-location city)
        avg-temperature (get-avg-temp location)])
  {:status 200
   :body {:city (:name location)
          :avg-temperature :avg-temperature
          :population (:population location)}})

(defn fetch-forecast [text].....)