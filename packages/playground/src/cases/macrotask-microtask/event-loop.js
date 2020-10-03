function hangJob() {
  let i = 0;

  let start = Date.now();

  function count() {
    // do a heavy job
    for (let j = 0; j < 1e9; j++) {
      i++;
    }

    alert("Done in " + (Date.now() - start) + "ms");
  }

  count();
}

function optJob1() {
  let i = 0;

  let start = Date.now();

  function count() {
    // do a piece of the heavy job (*)
    do {
      i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
      alert("Done in " + (Date.now() - start) + "ms");
    } else {
      setTimeout(count); // schedule the new call (**)
    }
  }

  count();
}

function optJob2() {
  let i = 0;

  let start = Date.now();

  function count() {
    // move the scheduling to the beginning
    if (i < 1e9 - 1e6) {
      setTimeout(count); // schedule the new call
    }

    do {
      i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
      alert("Done in " + (Date.now() - start) + "ms");
    }
  }

  count();
}
