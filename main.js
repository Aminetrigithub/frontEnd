const inp1 = document.getElementById("exampleFormControlInput1");
const inp2 = document.getElementById("exampleFormControlInput2");
const Textarea = document.getElementById("exampleFormControlTextarea1");
const submit = document.getElementById("sub");
const tbody = document.getElementById("tbody");

const fnc = () => {
  const elemtab = (
    <tr>
      <th scope="row">1</th>
      <td>{inp1.innerText}</td>
      <td>{inp2.innerText}</td>
      <td>{Textarea.innerText}</td>
    </tr>
  );
};
submit.addEventListener(click, (e) => {
  tbody.innerHTML += elemtab;
});

/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr> */
