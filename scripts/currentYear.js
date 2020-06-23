
export function Cyear() {

  const yspan = document.getElementById('cyear');
  const date = new Date();
  const year = date.getFullYear();

  yspan.innerHTML = year;
}