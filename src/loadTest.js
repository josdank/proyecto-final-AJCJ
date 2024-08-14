import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 50 }, // Escala a 50 usuarios durante 30 segundos
    { duration: '1m', target: 100 }, // Mantiene 100 usuarios durante 1 minuto
    { duration: '10s', target: 0 },  // Escala hacia abajo a 0 usuarios
  ],
};

export default function () {
  const res = http.get('https://proyecto-final-ajcj.vercel.app/home');
  check(res, {
    'status es 200': (r) => r.status === 200,
    'tiempo de respuesta es menor a 500ms': (r) => r.timings.duration < 500,
  });
  sleep(1);
}
