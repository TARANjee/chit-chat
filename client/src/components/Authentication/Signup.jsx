import {
  Box,
  Button,
  Field,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { toaster } from "../ui/toaster";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [show, setshow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = () => setshow(!show);
const history = useHistory();

  const postDetails = (pics) => {

    setLoading(true);
    if (pics === undefined) {
      toaster.warning({
        title: "Please Select an Image!",
        duration: 3000
      })
      setLoading(false);
      console.log("Please Select an Image!");
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chit-chat");
      data.append("cloud_name", "tjji");
      fetch("https://api.cloudinary.com/v1_1/tjji/image/upload", {
        method: "post",
        body: data,
      }).then((res) => res.json())
        .then((data) => {
          console.log(data)
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toaster.warning({
        title: "Please Select an Image!",
        duration: 3000
      })
      
      setLoading(false);
      return;
    }
  };
  const submitHandler = async () => {
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
  
      toaster.warning({
        title: "Please Fill all the Fields",
        duration: 3000
      })
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toaster.warning({
        title: "Passwords Do Not Match",
        duration: 3000
      })
      setLoading(false);
      return;
    }

    try {
      const config = { headers: { "Content-type": "application/json" } };

      const userData = {
        name,
        email,
        password,
        pic: pic ? pic : undefined,
      };

     

      const { data } = await axios.post("/api/user", userData, config);

    
      toaster.success({
        title: "Registration Successful",
        duration: 3000
      })
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      
      toaster.error({
        title: `Error Occurred! ${error.response.data.message}`,
        duration: 3000
      })
      setLoading(false);
    }


  };

  return (
    <VStack spacing="5px">

      <Field.Root>
        <Field.Label>Name</Field.Label>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="Enter your Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>Password</Field.Label>
        <InputGroup
          endElement={
            <Button
              background="none"
              color="black"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          }
        >
          <Input
            placeholder="Enter your Password"
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
      </Field.Root>
      <Field.Root>
        <Field.Label>Confirm Password</Field.Label>
        <InputGroup
          endElement={
            <Button
              background="none"
              color="black"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          }
        >
          <Input
            placeholder="Enter your Confirm Password"
            type={show ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputGroup>
      </Field.Root>
      <Field.Root>
        <Field.Label>Upload your Picture</Field.Label>
        <Input

          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </Field.Root>

      <Button
        colorPalette={"blue"}
        width="100%"
        style={{ marginTop: 15 }}

        onClick={submitHandler}
      >
        Sign Up
      </Button>
      {loading && <Box>Loading...</Box>}

    </VStack>
  );
}
