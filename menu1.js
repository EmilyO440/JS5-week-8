class MenuItem {
  constructor(name, price) {
      this.name = name;
      this.price = price;
  }

  display() {
      return `${this.name} - $${this.price.toFixed(2)}`;
  }
}

class Menu {
  constructor() {
      this.menuItems = [];
  }

  createMenuItem(name, price) {
      const newItem = new MenuItem(name, price);
      this.menuItems.push(newItem);
      return newItem;
  }

  viewMenu() {
      return this.menuItems.map(item => item.display());
  }

  deleteMenuItem(index) {
      if (index >= 0 && index < this.menuItems.length) {
          this.menuItems.splice(index, 1);
          return true;
      }
      return false;
  }
}

const menu = new Menu();

function createMenuItem() {
  const name = prompt('Enter the name of the menu item:');
  const price = parseFloat(prompt('Enter the price of the menu item:'));
  if (!isNaN(price)) {
      menu.createMenuItem(name, price);
      alert('Menu item created successfully!');
  } else {
      alert('Invalid price. Please enter a valid number.');
  }
}

function viewMenu() {
  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = '';
  
  menu.viewMenu().forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = item;
      menuList.appendChild(menuItem);
  });
}

function deleteMenuItem() {
  const index = parseInt(prompt('Enter the index of the menu item to delete:'));
  if (!isNaN(index)) {
      if (menu.deleteMenuItem(index)) {
          alert('Menu item deleted successfully!');
      } else {
          alert('Invalid index. No menu item found at that index.');
      }
  } else {
      alert('Invalid index. Please enter a valid number.');
  }
}

