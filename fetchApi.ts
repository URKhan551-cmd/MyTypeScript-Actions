// here Category is a UNION where i can choose one in many options.
type Category = "Sport" | "Cruiser" | "Touring" | "Dirt" | "Adventure" | "Naked" | "Electric";

// here interface which we will use to match the api response with that to get what we define inside of the interface.
interface Motorcycle {
  id: string;
  name: string;
  manufacturer: string;
  category: Category;
  price: number;
  image_url: string;
  created_at: Date;
  description: string;
  year: number;
  horsepower?: number;
  
}

// this function for an APi to fetch data 
async function fetchMotorcycles(): Promise<Motorcycle[]> {
  const url = "https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json";

 const response =  await fetch(url)
  
    if(!response.ok){
      throw new Error(`HTTP error status: ${response.status}`)
          }

    const data: unknown = await response.json();
    console.log(data);
    return data as Motorcycle[];    // explicitly tells the typescript that data can be Motorcycle[] interface design.
  }
  
// here this function create DOM Object fo the given motorcycyle parameter which is in ddesign of Interface Motorcycle.
function renderMotorcycleCard(motorcycle: Motorcycle): string {  // here return type is string
  
  return `<div class="motorcycle-card" data-id="${motorcycle.id}">
  <img src="${motorcycle.image_url}" 
  alt="${motorcycle.name}"
  class="motorcycle-card-image-container" />
  <div class="motorcycle-card-body">
  <span class="motorcycle-card-year-badge">${motorcycle.year}</span>
  <span class="motorcycle-card-title">${motorcycle.name}</span>
  <span class="motorcycle-card-manufacturer">${motorcycle.manufacturer}</span>
  <span class="motorcycle-card-category">${motorcycle.category}</span>
  <span class="motorcycle-card-description">${motorcycle.description}</span>
  <span class="motorcycle-card-price">$${motorcycle.price}</span>
  <span class="motorcycle-card-engine">${motorcycle.horsepower ?? "N/A"} HP</span>

  </div>
  </div>`
}


class MotorcycleGalleryApp {
  private allMotorcycles: Motorcycle[] = [];
constructor(){
  this.setupEventListeners();
}

public loadMotorcycles(motorcycles: Motorcycle[]): void {
  this.allMotorcycles = motorcycles;
  this.renderMotorcycles(this.allMotorcycles);
}

  public renderMotorcycles(motorcyclesToRender: Motorcycle[]): void {
const gridContainer = document.getElementById('motorcycle-grid');
const resultsCounter = document.getElementById('results-number');

if(resultsCounter) {
  resultsCounter.textContent = motorcyclesToRender.length.toString()
};

if(gridContainer) {
  if(motorcyclesToRender.length === 0){
    gridContainer.innerHTML = `<p class="no-result">No motorcycles match your criteria</p>`;
    return;
  }

  const htmlCards = motorcyclesToRender.map(motorcycle => renderMotorcycleCard(motorcycle)).join("");
  gridContainer.innerHTML = htmlCards;
}
  } 

private setupEventListeners(): void{
  const filterInput = document.getElementById("motorcycle-filter-input") as HTMLInputElement || null;

  if(filterInput){
    filterInput.oninput = (event: Event) => {
     const target = event.target as HTMLInputElement;
const searchItem = target.value.toLowerCase().trim();
const filteredList = this.allMotorcycles.filter(motorcycle => {
  return (
    motorcycle.name.toLowerCase().includes(searchItem) || motorcycle.manufacturer.toLowerCase().includes(searchItem) || motorcycle.category.toLowerCase().includes(searchItem)
  );
})
this.renderMotorcycles(filteredList)
    }
  }
}

}


async function init(){
  const motorcycles =  await fetchMotorcycles();
  const app = new MotorcycleGalleryApp();
  app.loadMotorcycles(motorcycles);
}
init();
