# Weighted average cost of capital (WACC)
Weighted average cost of capital (WACC) calculator of listed and unlisted companies based on an input-based API calculation engine. The weighted average cost of capital (WACC) represents a company's blended average cost of capital across all financing sources, including common shares, preferred shares, and debt. The WACC is commonly used in a discounted cash flow (DCF) analysis to find the net present value (NPV) of an investment and reflects the rate at which a company’s future free cash flows (FCFs) is discounted.

Documentation, Examples, FAQ, Terms & Conditions and License: [https://www.qumundo.com/docs/weighted-average-cost-of-capital-api](https://www.qumundo.com/docs/weighted-average-cost-of-capital-api).

If you see a feature that is missing or not correctly enforced, please [open an issue](https://github.com/qumundo/wacc/issues).

_You can find example request and response schema in the JSON file here: [example.json](https://github.com/qumundo/wacc/blob/master/res/example.json)_

**:de: Crafted in Frankfurt am Main, Germany.**

## Last changes

Last changes and the version history can be found in the [CHANGELOG.md](https://github.com/qumundo/wacc/blob/master/CHANGELOG.md) file.

_As this library is SemVer-compatible, any breaking change would be released as a MAJOR version only. Non-breaking changes and features are released as MINOR. Feature updates and bug fixes are released as PATCH (note that feature updates may as well be bundled under a MINOR release, if it comes with new settings or minor changes)._

## How to install?

Include `wacc` in your `package.json` dependencies:

```bash
npm install --save @qumundo/wacc
```

## How to use?

This module may be used to calculate, determine and retrieve weighted average cost of capital (WACC) parameters and metrics. You may self-define the required input parameter to calculate current, historical, future and/or scenario-based parameters and metrics based on your own data and assumptions. Weighted average cost of capital (WACC) parameters and metrics can be calculated in various ways; this module gives you the option to calculate, determine and retrieve weighted average cost of capital (WACC) parameters and metrics through various methods.

### :link: Import the module

Import the module in your code:

`const WACC = require("@qumundo/wacc")`

### :arrow_right: Create request schema and define input parameters

```javascript
let wacc_item =
{
  "id": "",
  "id_type": "",
  "legal_entity": "Company X",
  "fiscal_year": 2020,
  "date": "2020-12-31",
  "currency": "EUR",
  "cost_debt": 0.016072,
  "weight_debt": 0.007758,
  "cost_equity": 0.043090,
  "weight_equity": 0.992241
}
```

### :arrow_right: Get wacc parameters for created schema and defined input parameters

```javascript

let wacc_request = { data: [] };

wacc_request.data.push(wacc_item);  // Up to 5 items/calculation per request

let wacc = await WACC.getWACC(wacc_request);

/*
wacc.data[0] ===

{
  "success": true,
  "message": "",
  "id": "",
  "id_type": "",
  "legal_entity": "Company X",
  "fiscal_year": 2020,
  "date": "2020-12-31",
  "currency": "EUR",
  "wacc_debt": 0.000125,
  "wacc_equity": 0.042756,
  "wacc": 0.04288
},

*/
```

### :arrow_right: Get example request schema

```javascript
let wacc_request = await WACC.getExample(true, false);  // (request, response)
```

### :arrow_right: Get example response schema

```javascript
let wacc_response = await WACC.getExample(false, true);  // (request, response)
```

### :arrow_right: Methods and options to calculate wacc parameters and metrics

Various methods and options are available to calculate weighted average cost of capital (WACC) parameters and metrics:

_... More details to follow ..._

### :arrow_right: Example: Consider interest expense, historical debts, tax rate, risk free rate, leveraged beta and risk premiums

_... More details to follow ..._

```javascript
let wacc_item =
{

  "interest_expense": 135,
  "total_debts": [ 15032, 4554, 4012 ],
  "tax_rate": 0.140857,
  "weight_debt": 0.007758,
  "risk_free_rate": -0.00269,
  "levered_beta": 0.969907,
  "equity_risk_premium": 0.0472,
  "other_premium": 0,
  "weight_equity": 0.992241
}
```

### :arrow_right: Example: Consider interest expense, historical debts, tax rate, dividend expected, historical dividends, dividend rate and share price

_... More details to follow ..._

```javascript
let wacc_item =
{

  "interest_expense": 135,
  "total_debts": [ 15032, 4554, 4012 ],
  "tax_rate": 0.140857,
  "weight_debt": 0.007758,
  "dividend_expected": 3.24,
  "dividends": [ 3.24, 3.24, 3.24 ],
  "dividend_rate": 0,
  "share_price": 75.25,
  "weight_equity": 0.992241
}
```

### :arrow_right: Example: Consider interest expense, historical debts, tax rate, preferred dividend, preferred share price, common dividend expected, common historical dividends, common dividend rate and common share price

_... More details to follow ..._

```javascript
let wacc_item =
{

  "interest_expense": 135,
  "total_debts": [ 15032, 4554, 4012 ],
  "tax_rate": 0.140857,
  "weight_debt": 0.007758,
  "preferred_dividend": 3.24,
  "preferred_share_price": 75.25,
  "weight_preferred_equity": 0.1,
  "common_dividend_expected": 3.24,
  "common_dividends": [ 3.24, 3.24, 3.24 ],
  "common_dividend_rate": 0,
  "common_share_price": 75.25,
  "weight_common_equity": 0.892241
}
```

### :arrow_right: Example: Consider diluted shares and share price

_... More details to follow ..._

```javascript
let wacc_item =
{

  "cost_debt": 0.016072,
  "total_debt": 7758000,
  "cost_equity": 0.043090,
  "diluted_shares": 13185927,
  "share_price": 75.25
}
```

### :arrow_right: Example: Consider preferred shares, common shares and share prices

_... More details to follow ..._

```javascript
let wacc_item =
{

  "cost_debt": 0.016072,
  "total_debt": 7758000,
  "cost_preferred_equity": 0.043090,
  "preferred_shares": 132890,
  "preferred_share_price": 75.25,
  "cost_common_equity": 0.043090,
  "common_shares": 13053037,
  "common_share_price": 75.25
}
```

### :arrow_right: Example: Consider preferred equity, common equity and total values

_... More details to follow ..._

```javascript
let wacc_item =
{

  "cost_debt": 0.016072,
  "total_debt": 7758000,
  "cost_preferred_equity": 0.043090,
  "total_preferred_equity": 10000000,
  "cost_common_equity": 0.043090,
  "total_common_equity": 982241000
}
```

## Need more wacc parameters?

Choose between various subscription options for your use case: [https://www.qumundo.com/api/weighted-average-cost-of-capital-api](https://www.qumundo.com/api/weighted-average-cost-of-capital-api).

Once subscribed and enabled, login to our platform and provide authentication along your request.

### :arrow_right: Login to our platform to receive authentication token

```javascript
let credentials = { email: config.YOUR_EMAIL, password: config.YOUR_PASSWORD };   // Keep your login credentials secure and secret

let login = await WACC.getLogin(credentials);

let token = login.token;
```

### :arrow_right: Get wacc parameters with your subscription

```javascript
let wacc = await WACC.getWACC(value_request, token);
```

_If you need additional features, changes or notice any discrepancies, feel free to submit a Pull Request._

**Consider supporting the development by [making a donation](https://github.com/sponsors/qumundo).**
