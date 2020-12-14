import { useState } from "react";
import { Textarea, Box, SimpleGrid, Input } from "@chakra-ui/react";

export default function Home() {
  const [url, setUrl] = useState("");
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setUrl(inputValue);
  };
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box>
        <Input onChange={handleInputChange} placeholder="Url" />
        <Textarea placeholder="Input" height="85vh" />
      </Box>
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="${url}" width="100%" height="100%" ></iframe>`,
        }}
      />
      {/*<Textarea value={value} placeholder="Output" height="45vh" />*/}
      <Box ml={4}>•</Box>
    </SimpleGrid>
  );
}
