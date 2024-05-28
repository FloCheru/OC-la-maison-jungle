import plantList from "./plantList";

const categories = plantList.reduce((result, plant)=> {
    if(!result.includes(plant["category"])) result.push(plant["category"]);
    return result
},[])

export default categories