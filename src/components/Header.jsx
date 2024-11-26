import DefaultBtn2 from "./DefaultButton2";

export default function Header({ openModal, items }) {
  return (
    <main id="main-header">
      <title id="title">
        <img src="logo.jpg" />
        <h1>FOOD FUSION</h1>
      </title>
      <DefaultBtn2 onClick={openModal}>Cart({items})</DefaultBtn2>
    </main>
  );
}
