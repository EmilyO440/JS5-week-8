document.addEventListener('DOMContentLoaded', function () {
  const menuList = document.getElementById('menu-list');

  // Sample menu data
  const menuItems = [
      { name: 'Burger', price: 8.99 },
      { name: 'Pizza', price: 12.99 },
      { name: 'Salad', price: 6.99 },
      // Add more menu items as needed
  ];

  // Render menu items
  menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `<strong>${item.name}</strong><br>Price: $${item.price.toFixed(2)}`;
      
      // Handle click event for each menu item
      menuItem.addEventListener('click', () => {
          alert(`You selected ${item.name}. Price: $${item.price.toFixed(2)}`);
      });

      menuList.appendChild(menuItem);
  });
});
