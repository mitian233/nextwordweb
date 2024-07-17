// export default function Page({ params }: { params: { slug: string } }) {
//   return <div>My Post: {params.slug}</div>;
// }

"use client";
// next.config.js

// Page.tsx
import React, { useState, useEffect, Suspense } from "react";
import { USkeleton } from "@/components/USkeleton";

interface RequestData {
  address: string;
}

// interface JsonData {
//   en: {
//     word: string;
//     pronunciation: string;
//     sentence: string;
//     paragraphs: string;
//   };
//   zh: {
//     word: string;
//     pronunciation: string;
//     sentence: string;
//     paragraphs: string;
//   };
//   gifUrl: string;
// }

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  // const router = useRouter();
  const { slug } = params;
  const [data, setData] = useState<JsonData | null>(null);

  useEffect(() => {
    const requestData: RequestData = { address: slug };
    const processData = async () => {
      const response = await fetch(
        "https://api.oioweb.cn/api/common/OneDayEnglish",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
        }
      );
      console.log("Response Built", response);

      if (response.ok) {
        const jsonData = await response.json();
        console.log("Jsondata got", jsonData);
        setData(jsonData);
      } else {
        throw new Error(`Error fetching data: ${response.status}`);
      }
    };

    processData().catch((error) => {
      console.error(error);
      // Handle error (e.g., show a message to the user)
    });
  }, [slug]);

  if (!data) {
    return (
      <div className="flex h-lvh items-center justify-center">
        <div className="w-2/3">
          <USkeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      My Post: {slug} {data.result.content}
      {/* Render other data as needed */}
    </div>
  );
}
