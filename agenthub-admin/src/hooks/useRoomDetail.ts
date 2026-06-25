"use client";

import { useEffect, useState } from "react";
import { listings } from "@/data/listings";
import { Listing } from "@/types/listing";

export const useRoomDetail = (roomId: string) => {
  const [room, setRoom] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setRoom(null);

    const timer = setTimeout(() => {
      const selected = listings.find((item) => item.id === roomId) ?? null;
      setRoom(selected);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [roomId]);

  return { room, isLoading };
};
