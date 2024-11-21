let obj = {
    prop1: {
        prop2: {
            someProp: "value",
        },
    },
};

console.log(obj?.prop1?.prop2?.someProp);

console.log('-----空值合并 ??-----');

let amount = null;
amount = amount ?? 1; // => 1,符合预期 ✅

amount = 0;
amount = amount ?? 1; // => 0,符合预期 ✅

amount = "";
amount = amount ?? 1; // => '',符合预期 ✅

console.log('-----快递业务的 IT 系统-----');

let vip_customer_1 = {
    name: "Carl",
    vip: {
        num: "U-1001",
        country: "USA",
    },
};

let vip_customer_2 = {
    name: "Carl",
    vip: {
        num: "C-1002",
    },
};

let customer = {
    name: "Jennie",
};

/**
 * @param {object} customer
 * @param {object} [customer.vip]
 * @param {last} [customer.vip.country]
 */
const isVip = (customer) => {
    // your code here
    let v = customer?.vip?.num ??  undefined;
    let c = customer?.vip?.country ??  'China';
    console.log(v);
    console.log(c);
}

//用例
isVip(vip_customer_1) // => 'U-1001'
isVip(vip_customer_2) // => 'C-1002'
isVip(customer) //  => 'undefined'

const getCountry = (customer) => {
    //you code here
    let c = customer?.vip?.country ??  'China'; 
    console.log(c);
  };
  
  //用例
  getCountry(vip_customer_1); // => 'USA'
  getCountry(vip_customer_2); // => 'China'