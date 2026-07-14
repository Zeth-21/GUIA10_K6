// load-test.js
// Prueba de carga sobre Airport Gap
// 10 usuarios usando la API al mismo tiempo durante 30 segundos
//import http from 'k6/http';
//import { check, sleep } from 'k6';

//export const options = {
//vus: 10,        // 10 usuarios simultáneos
//duration: '30s', // durante 30 segundos
//};

//export default function () {
// Petición 1: listar aeropuertos
//const res1 = http.get('https://airportgap.com/api/airports');
//check(res1, {
//'status 200': (r) => r.status === 200,
//'menos de 1000ms': (r) => r.timings.duration < 1000,
//});

// Petición 2: buscar JFK
//const res2 = http.get('https://airportgap.com/api/airports/JFK');
//check(res2, {
//'JFK status 200': (r) => r.status === 200,
//});

//sleep(1); // esperar 1 segundo antes de repetir
//}

// stress-test.js - Stress Test sobre Airport Gap
// Sube la carga gradualmente hasta encontrar el límite del sistema
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // stages definen cómo cambia la cantidad de usuarios en el tiempo
  // Es como un volumen que sube, se mantiene, sigue subiendo y baja
  stages: [
    { duration: '30s', target: 5 },  // warm-up: subir de 0 a 5 usuarios
    { duration: '30s', target: 20 }, // subir a 20 usuarios
    { duration: '60s', target: 20 }, // mantener 20 usuarios por 1 minuto
    { duration: '30s', target: 50 }, // zona de estrés: subir a 50 usuarios
    { duration: '30s', target: 0 },  // recuperación: bajar a 0
  ],
  thresholds: {
    // En estrés permitimos tiempos más altos
    http_req_duration: ['p(95)<1000'], // hasta 1 segundo en pico
    http_req_failed: ['rate<0.05'],  // hasta 5% de errores bajo estrés
  }
};

export default function () {
  const res = http.get('https://airportgap.com/api/airports');
  check(res, {
    'status 200': (r) => r.status === 200,
    'responde en <1000ms': (r) => r.timings.duration < 1000,
  });
  sleep(1);
}