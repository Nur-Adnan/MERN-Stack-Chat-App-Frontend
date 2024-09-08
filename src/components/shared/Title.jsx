import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Messenger App",
  description = "A Messenger App is a communication platform that allows users to send and receive messages, photos, videos, and files in real time. It typically supports text chat, voice and video calls, group conversations, and notifications, often with added features like media sharing, emojis, and customizable settings.",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
