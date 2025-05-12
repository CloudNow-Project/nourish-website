import React from "react";
import { MapPinIcon } from "lucide-react";

interface MapProps {
  location: string;
  mapEmbedUrl?: string;
}

export default function Map({ location, mapEmbedUrl }: MapProps) {
  // If we have a valid embed URL, use it
  if (mapEmbedUrl) {
    return (
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map location for ${location}`}
      />
    );
  }

  // Otherwise, show a placeholder
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 text-neutral-500">
      <div className="bg-chile-rojo p-3 rounded-full mb-4">
        <MapPinIcon className="w-8 h-8 text-white" />
      </div>
      <p className="text-lg font-medium text-center px-4">{location}</p>
      <p className="mt-4 text-sm text-neutral-400">Map will be displayed here in production</p>
    </div>
  );
}
