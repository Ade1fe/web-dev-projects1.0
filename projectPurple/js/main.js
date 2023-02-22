
            document.getElementById("myform").style.display = "none";
        document.getElementById("join_us").onclick = function() {
            document.getElementById("myform").style.display = "none";
        }
 
        document.getElementById("rounded").onclick = function() {
            document.getElementById("rounded").style.display = "none";
        }
 
        document.getElementById("square").onclick = function() {
            document.getElementById("square").style.display = "none";
        }

        


        // ------------------------------
        const box = document.getElementById('box');

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  if (box.style.visibility === 'hidden') {
    box.style.visibility = 'visible';

    btn.textContent = 'Hide div';
  } else {
    box.style.visibility = 'hidden';

    btn.textContent = 'Show div';
  }
});