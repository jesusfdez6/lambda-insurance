const dynamoDB = require("../dynamoDB/dynamo");
const mapperResponseDynamo = require("../mapper/mapperDynamo");
const mapperResponse = require("../mapper/mapperResponse");

exports.getInsurances = async ()=>{
    console.log("getInsurances services");
    try {

        const insurances =  await dynamoDB.getInsurances();
        const deserializedInsurances = insurances.Items.map(insurance => {
        
            return mapperResponseDynamo.getRow(insurance);
          });

        console.log("response services:");
        console.log(deserializedInsurances);

        return mapperResponse.responseSuccess(deserializedInsurances);
      

    } catch (error) {
        console.error("Error getInsurance services:");
        console.log(error);
        return mapperResponse.responseTecnicalError();
    }
}