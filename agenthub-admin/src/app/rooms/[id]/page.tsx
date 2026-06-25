"use client";

import { useParams } from "next/navigation";
import RoomDetailLoading from "@/components/room/RoomDetailLoading";
import RoomDetailView from "@/components/room/RoomDetailView";
import RoomNotFound from "@/components/room/RoomNotFound";
import { useRoomDetail } from "@/hooks/useRoomDetail";

const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();
  const { room, isLoading } = useRoomDetail(params.id);

  if (isLoading) {
    return <RoomDetailLoading />;
  }

  if (!room) {
    return <RoomNotFound />;
  }

  return <RoomDetailView room={room} />;
};

export default RoomDetailPage;
