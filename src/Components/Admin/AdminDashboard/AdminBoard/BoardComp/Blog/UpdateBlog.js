import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import * as yup from "yup";
import blogPreImg from "./blo.jpg";

const UpdateBlog = () => {
  const [image, setImage] = useState(blogPreImg);
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setAvatar(file);
    setImage(save);
  };

  const handleForm = yup.object().shape({
    blogTitle: yup.string().max(50).min(30).required("Blog Title Is Required"),
    blogShotDes: yup
      .string()
      .min(160)
      .max(175)
      .required("Input a Short Description"),
    descPragraphOne: yup.string().required("Detailed Description is Required"),
    descPragraphTwo: yup.string(),
    descPragraphThree: yup.string(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(handleForm),
  });

  const onSummitBlog = handleSubmit(async (value) => {
    const {
      blogTitle,
      blogShotDes,
      descPragraphOne,
      descPragraphTwo,
      descPragraphThree,
    } = value;
    const mainURL = "http://localhost:2221";
    const liveURL = "https://skintriumph-server.herokuapp.com";
    const URL = `${liveURL}/api/blog/update/${id}`;
    console.log(value);

    const formData = new FormData();

    formData.append("blogTitle", blogTitle);
    formData.append("blogShotDes", blogShotDes);
    formData.append("descPragraphOne", descPragraphOne);
    formData.append("descPragraphTwo", descPragraphTwo);
    formData.append("descPragraphThree", descPragraphThree);
    formData.append("blogImg", avatar);

    const config = {
      "content-type": "multipart/form-data",
    };

    await axios
      .patch(URL, formData, config)
      .then((res) => {
        console.log(res.data.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Blog Updated",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/boardblogs");
        });
      })
      .catch((error) => {
        new Swal({
          title: error.response.data.message,
          text: `Please Check and Fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        }).then(() => {
          // setLoading(false)
        });
      });
  });

  const [getBlog, setGetBlog] = useState({});

  const gettingBlog = async () => {
    const mainURL = "http://localhost:2221";
    const liveURL = "https://skintriumph-server.herokuapp.com";
    const URL = `${liveURL}/api/blog/${id}`;

    await axios
      .get(URL)
      .then((res) => {
        setGetBlog(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        new Swal({
          title: error.response.data.message,
          text: `Please Check and Fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };

  useEffect(() => {
    gettingBlog();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Card onSubmit={onSummitBlog} type="multipart/form-data">
          <MainTitle>
            <Title>Skintriumph</Title>
          </MainTitle>
          <CreateHold>
            <ImageHolder>
              <PrevImgDiv>
                <img src={image} alt="" />
              </PrevImgDiv>
              <ImageLabel htmlFor="pix">Upload an Image</ImageLabel>
              <ImageInput
                defaultValue={getBlog.blogImg}
                id="pix"
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </ImageHolder>

            <InputCtrl>
              <span>Blog Title</span>
              <input
                defaultValue={getBlog.blogTitle}
                placeholder="e.g The Best Selling Product"
                {...register("blogTitle")}
              />
              <Error> {errors.blogTitle?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Short Description</span>
              <textarea
                defaultValue={getBlog.blogShotDes}
                placeholder="e.g The sest way to publish..."
                {...register("blogShotDes")}
              />
              <Error> {errors.blogShotDes?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Full Details(First Paragraph)</span>
              <textarea
                defaultValue={getBlog.descPragraphOne}
                placeholder="Full Details Of Your Blog(Paragraph 1)"
                {...register("descPragraphOne")}
              />
              <Error> {errors.descPragraphOne?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Full Details(Second Paragraph)</span>
              <textarea
                defaultValue={getBlog.descPragraphTwo}
                placeholder="Full Details Of Your Blog(Paragraph 2)"
                {...register("descPragraphTwo")}
              />
              <Error> {errors.descPragraphTwo?.message} </Error>
            </InputCtrl>
            <InputCtrl>
              <span>Full Details(Third Paragraph)</span>
              <textarea
                defaultValue={getBlog.descPragraphThree}
                placeholder="Full Details Of Your Blog (Paragraph 3)"
                {...register("descPragraphThree")}
              />
              <Error> {errors.descPragraphThree?.message} </Error>
            </InputCtrl>
          </CreateHold>
          <Button>
            <button type="submit">Update Blog</button>
          </Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default UpdateBlog;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f8f8f9;
  font-family: poppins;
  display: flex;
  justify-content: center;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;
const Wrapper = styled.div`
  width: 1150px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
    width: 95%;
  }
`;

const Card = styled.form`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 500px;
  min-height: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;

  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const MainTitle = styled.div`
  text-align: center;
`;
const Title = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`;

const CreateHold = styled.div``;
const PrevImgDiv = styled.div`
  height: 130px;
  width: 90%;
  /* background-color: aqua; */
  border-radius: 10px;
  margin: 10px 0;

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  padding: 6px 12px;
  background-color: #000;
  color: white;
  border-radius: 3px;
  transition: all 350ms;
  font-size: 14px;
  outline: none;
  border: 0;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  small {
    color: red;
    font-weight: 600;
  }
`;
const InputCtrl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  span {
    font-size: small;
    font-weight: 600;
  }

  input {
    height: 30px;
    width: 300px;
    font-family: poppins;
    font-size: 13px;
  }

  select {
    height: 30px;
    width: 300px;
    font-family: poppins;
    margin-bottom: 15px;
  }

  textarea {
    height: 100px;
    font-family: poppins;
    resize: none;
    font-size: 13px;
  }
`;

const Error = styled.div`
  font-size: x-small;
  font-weight: bold;
  color: red;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  button {
    padding: 6px 15px;
    font-family: poppins;
    font-weight: 600;
    background-color: #ff9505;
    color: #fff;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;
