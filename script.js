let ul = document.createElement('ul');
    document.body.append(ul);

    while (true) {
      let data = prompt("Enter the text for the list item", "");

      if (!data) {
        break;
      }

      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    }