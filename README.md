# Laboratorio 10: Pruebas de Rendimiento y Carga con k6

Este repositorio contiene los scripts de pruebas de rendimiento (Load Test, Stress Test y Spike Test) desarrollados en JavaScript utilizando la herramienta Grafana k6.

## 🚀 Escenarios de Prueba

* **Load Test:** Simulación de carga normal (10 usuarios virtuales concurrentes) sobre la API de Airport Gap.
* **Stress Test:** Incremento gradual de usuarios (hasta 50) para encontrar el límite de degradación y analizar el comportamiento del *Rate Limiting* en Airport Gap.
* **Spike Test:** Simulación de un pico masivo y repentino (100 usuarios en 5 segundos) sobre la API de Restful-Booker para medir su resiliencia.

## 🛠️ Herramientas Utilizadas

* [Grafana k6](https://k6.io/)
* JavaScript (ES6)
* APIs de prueba: Airport Gap y Restful-Booker

## 📄 Documentación y Resultados

Puedes revisar el informe completo del laboratorio, que incluye el análisis de métricas (tiempos de respuesta, p95, tasa de errores), capturas de los resultados en terminal y las conclusiones detalladas aquí:

👉 **[Ver el Informe del Laboratorio](https://drive.google.com/file/d/1Ot7-caMZCqz_HKII1tFlCYtW--rbALIR/view?usp=sharing)**