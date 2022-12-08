(ns oma-projekti.prod
  (:require [oma-projekti.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
