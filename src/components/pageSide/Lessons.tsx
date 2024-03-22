"use client";

import Flipcard from "@/components/ui/Flipcard";

import { cards } from "@/lib/constants";
import { Grid } from "lucide-react";
import React from "react";
import { getLessons } from "../../../sanity/lib/client";

import useSWR from "swr";

type Props = {};

const Lessons = (props: Props) => {
  const { data, isLoading, error } = useSWR("/api/lessons", getLessons);
  if (!data || isLoading) return <div>Loading...</div>;
  if (!data || error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-1">
      {data && data.map((card, i) => (
        <Flipcard
          key={i}
          title={card.title}
          description={card.description}
          href={card.slug}
        />
      ))}
    </div>
  );
};

export default Lessons;
