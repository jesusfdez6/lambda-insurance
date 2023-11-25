exports.getRow = (insurance)=>{
    return {
        id: insurance.id.S ,
        description: insurance.description.S ,
        valueInsurance: parseInt(insurance.valueInsurance.N) ,
        valueinsuranced: parseInt(insurance.valueinsuranced.N),
      };
}