import { useState, useEffect } from "react";
import { Textarea, Box, SimpleGrid, Input } from "@chakra-ui/react";
import useSWR from "swr";
import getTitles from "../api/getTitles";

export default function Home() {
  const [url, setUrl] = useState("");
  const [value, setValue] = useState("");
  const { data } = useSWR(url, getTitles, { revalidateOnFocus: false });
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setUrl(inputValue);
  };
  let handleTextChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  useEffect(() => {
    if (data) {
      setValue(data.text || "");
    }
  }, [data]);
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box>
        <Input onChange={handleInputChange} placeholder="Url" />
        {data && (
          <>
            <div>{data.title}</div>
            <div>{data.company}</div>
          </>
        )}
        <Textarea
          onChange={handleTextChange}
          value={value}
          placeholder="Input"
          height="80vh"
        />
      </Box>
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="${url}" width="100%" height="100%" ></iframe>`,
        }}
      />
      <Box ml={4}>•</Box>
    </SimpleGrid>
  );
}
