// const lootPool = [
//     { name: 'Gold', weight: 50 },
//     { name: 'Silver', weight: 30 },
//     { name: 'Bronze', weight: 20 },
//   ];
  
//   const totalWeight = lootPool.reduce((acc, item) => acc + item.weight, 0);
//   const randomNumber = Math.random() * totalWeight;
  
//   function selectItem(randomNumber, lootPool) {
//     let remainingWeight = randomNumber;
//     for (const item of lootPool) {
//       remainingWeight -= item.weight;
//       if (remainingWeight <= 0) {
//         return item;
//       }
//     }
//   }
  
//   const selectedItem = selectItem(randomNumber, lootPool);
//   console.log(`You won: ${selectedItem.name}!`);
  

// function openLootBox() {
//     const lid = document.querySelector('.lid');
//     const boxContent = document.querySelector('.box-content');
    
//     // Animate the lid opening
//     lid.style.transform = 'translateY(-100%)';
  
//     // After a delay, show the item inside
//     setTimeout(() => {
//       const item = document.createElement('div');
//       item.innerText = "🌟";  // Use an emoji or any other icon for the item
//       boxContent.appendChild(item);
//     }, 500);
//   }
  