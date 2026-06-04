declare module 'geoip-lite' {
  interface GeoData {
    range: [number, number];
    country: string;
    region: string;
    city: string;
    ll: [number, number];
  }
  export function lookup(ip: string): GeoData | null;
}
