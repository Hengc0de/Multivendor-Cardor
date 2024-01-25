import "./style.css";
const Loading = ({ isLoading }) => {
  return (
    <div className="fullscreen ">
      <h1 className="text-3xl font-bold">Registering your account...</h1>
      <div class="loader"></div>;
    </div>
  );
};
export default Loading;
