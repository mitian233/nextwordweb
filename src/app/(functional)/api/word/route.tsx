// const requestWordData = async () => {
//   try {
//     const response = await fetch("http://3ewi7z.natappfree.cc/getmsg");
//     const data: WordJsonData = await response.json();

//     // 将 data 保存到 words 中
//   } catch (error) {
//     console.error("Error fetching word data:", error);
//   }
// };

export async function GET(request: Request) {
  try {
    const res = await fetch("http://3ewi7z.natappfree.cc/getmsg", {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${process.env.PINATA_JWT}`,

      // },
      // body: data,
    });
    const data: WordJsonData = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
