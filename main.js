const pieArray = [
    {name: 'Blueberry Pie',
    picture: 'https://www.lemontreedwelling.com/wp-content/uploads/2018/05/Blueberry-Pie-1.jpg',
    instructor: 'zoe'
    },
    {name: 'Chocolate Meringue Pie',
    picture: 'https://assets.marthastewart.com/styles/wmax-300/d23/med103596_0408_choc_pie/med103596_0408_choc_pie_vert.jpg?itok=-dwsBqVc',
    instructor: 'maggie'    
    },
    {name: 'Key Lime Pie',
    picture: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/05/best-key-lime-pie.jpg',
    instructor: 'greg'
    },
    {name: 'Strawberry Rhubarb Pie',
    picture: 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/20020-strawberry-rhubarb-pie-600x600.jpg?ext=.jpg',
    instructor: 'michael'
    },
    {name: 'Pecan Pie',
    picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brown-sugar-pecan-pie-ghk-1118-1540321627.jpg?crop=1xw:0.99975xh;center,top&resize=980:*',
    instructor: 'callan'
    },
    {name: 'Apple Pie',
    picture: 'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/10/main/arkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg?itok=e6AfBEXc',
    instructor: 'zoe'
    }
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const cardBuilder = (pieArr) => {
    let domString = '<div class="row">';
    for (let i = 0; i < pieArr.length; i ++) {
        const currentPie = pieArr[i];
        domString += `
        <div class="col col-3">
        <div class="card">
            <img src="${currentPie.picture}" class="card-img-top" alt="${currentPie.name}">
            <div class="card-body">
                <h5 class="card-title">${currentPie.name}</h5>
                <p class="card-text">${currentPie.instructor}</p>
            </div>
        </div>
        </div>
        `
    }
    domString += '</div>'
    printToDom(domString, 'pie-zone');
}

// cardBuilder(pieArray);

const buttonClick = (event) => {
    const instructor = event.target.id;
    const selectedPies = [];
    for (let i = 0; i < pieArray.length; i ++) {
        const pie = pieArray[i];
        if (pie.instructor === instructor) {
            selectedPies.push(pie);
        }
    }
    cardBuilder(selectedPies);
}

document.getElementById('maggie').addEventListener('click', buttonClick);
document.getElementById('zoe').addEventListener('click', buttonClick);
document.getElementById('callan').addEventListener('click', buttonClick);
document.getElementById('michael').addEventListener('click', buttonClick);
document.getElementById('greg').addEventListener('click', buttonClick);
document.getElementById('all').addEventListener('click', () => {
    cardBuilder(pieArray);
});