var _templateObject;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
import React, { useEffect, useState, createRef } from 'react';
import { SupersetClient, styled } from '@superset-ui/core';
var Styles = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  padding: ", "px;\n  border-radius: ", "px;\n  height: ", "px;\n  width: ", "px;\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n\n  .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: ", "px;\n  }\n\n  .filters {\n    display: flex;\n    gap: ", "px;\n    margin-bottom: ", "px;\n  }\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    table-layout: fixed;\n\n    th,\n    td {\n      padding: 8px;\n      border: 1px solid #ccc;\n      text-align: left;\n    }\n\n    th {\n      position: sticky;\n      top: 0;\n      background-color: white;\n      z-index: 1;\n    }\n\n    tbody tr {\n      background-color: white;\n    }\n  }\n\n  .modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n  }\n\n  .modal-card {\n    background: white;\n    border-radius: 8px;\n    padding: 20px;\n    width: 300px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    position: relative;\n  }\n\n  .modal-close {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 18px;\n    cursor: pointer;\n    color: #999;\n  }\n\n  .modal-form {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n\n    input {\n      padding: 8px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n    }\n\n    button {\n      padding: 10px;\n      background-color: #007bff;\n      color: white;\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n  }\n"])), _ref => {
  var {
    theme
  } = _ref;
  return theme.colors.secondary.light2;
}, _ref2 => {
  var {
    theme
  } = _ref2;
  return theme.gridUnit * 4;
}, _ref3 => {
  var {
    theme
  } = _ref3;
  return theme.gridUnit * 2;
}, _ref4 => {
  var {
    height
  } = _ref4;
  return height;
}, _ref5 => {
  var {
    width
  } = _ref5;
  return width;
}, _ref6 => {
  var {
    theme
  } = _ref6;
  return theme.gridUnit * 3;
}, _ref7 => {
  var {
    theme
  } = _ref7;
  return theme.gridUnit * 3;
}, _ref8 => {
  var {
    theme
  } = _ref8;
  return theme.gridUnit * 2;
}, _ref9 => {
  var {
    theme
  } = _ref9;
  return theme.gridUnit * 2;
});
export default function SupersetPluginChartPage(props) {
  var {
    data,
    height,
    width,
    datasource
  } = props;
  var rootElem = /*#__PURE__*/createRef();
  var [filters, setFilters] = useState({});
  var [filteredData, setFilteredData] = useState(data);
  var [isModalOpen, setIsModalOpen] = useState(false);
  var [DBName, setDBName] = useState(null);
  var [tableName, settableName] = useState(null);
  console.log(datasource);
  useEffect(() => {
    function fetchExploreData() {
      return _fetchExploreData.apply(this, arguments);
    }
    function _fetchExploreData() {
      _fetchExploreData = _asyncToGenerator(function* () {
        try {
          var _response$json, _response$json$result, _response$json$result2, _response$json$result3, _response$json2, _response$json2$resul, _response$json2$resul2;
          var [datasource_id, datasource_type] = datasource.split('__');
          var response = yield SupersetClient.get({
            endpoint: "/api/v1/explore/?datasource_type=" + datasource_type + "&datasource_id=" + datasource_id
          });
          var dbName = (_response$json = response.json) == null ? void 0 : (_response$json$result = _response$json.result) == null ? void 0 : (_response$json$result2 = _response$json$result.dataset) == null ? void 0 : (_response$json$result3 = _response$json$result2.database) == null ? void 0 : _response$json$result3.name;
          var TableName = (_response$json2 = response.json) == null ? void 0 : (_response$json2$resul = _response$json2.result) == null ? void 0 : (_response$json2$resul2 = _response$json2$resul.dataset) == null ? void 0 : _response$json2$resul2.datasource_name;
          if (dbName) {
            setDBName(dbName);
            settableName(TableName);
            console.log('Database Name:', dbName);
            console.log('Table Name:', TableName);
          } else {
            console.warn('Database name not found in response');
          }
        } catch (error) {
          console.error('Error fetching explore API:', error);
        }
      });
      return _fetchExploreData.apply(this, arguments);
    }
    fetchExploreData();
  }, [datasource]);
  var columns = Object.keys(data[0] || {});
  var [formData, setFormData] = useState({
    functionName: '',
    group: '',
    business: '',
    assessmentLead: '',
    assessmentID: '',
    maturity: '',
    assessmentDate: '',
    status: '',
    actions: '',
    assessmentType: ''
  });
  var handleInputChange = (field, value) => {
    setFormData(prevData => _extends({}, prevData, {
      [field]: value
    }));
  };

  // Update the filtered data based on selected filters
  useEffect(() => {
    var updatedData = data;
    Object.entries(filters).forEach(_ref10 => {
      var [column, value] = _ref10;
      if (value) {
        updatedData = updatedData.filter(row => row[column] === value);
      }
    });
    setFilteredData(updatedData);
  }, [filters, data]);

  // Handle filter changes
  var handleFilterChange = (column, value) => {
    setFilters(prev => _extends({}, prev, {
      [column]: value
    }));
  };
  return /*#__PURE__*/React.createElement(Styles, {
    ref: rootElem,
    height: height,
    width: width
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '10px 20px',
      fontSize: '14px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    onClick: () => setIsModalOpen(true)
  }, "Create Assessment")), isModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "modal-close",
    onClick: () => setIsModalOpen(false)
  }, "\xD7"), /*#__PURE__*/React.createElement("form", {
    className: "modal-form",
    onSubmit: (/*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* (e) {
        e.preventDefault();
        var isAllFilled = Object.values(formData).every(value => value !== '');
        if (!isAllFilled) {
          alert("Please fill out all fields!");
          return;
        }
        console.log("Form Data Submitted:", formData);
        try {
          var responser = yield SupersetClient.post({
            endpoint: '/api/dataset/update',
            jsonPayload: {
              formData: [formData],
              database: DBName,
              table_name: tableName
            }
          });
          console.log(responser.json.message);
        } catch (error) {
          console.error('Error Submitting form data: ', error);
        }
        setFormData({
          functionName: '',
          group: '',
          business: '',
          assessmentLead: '',
          assessmentID: '',
          maturity: '',
          assessmentDate: '',
          status: '',
          actions: '',
          assessmentType: ''
        });
        setIsModalOpen(false);
      });
      return function (_x) {
        return _ref11.apply(this, arguments);
      };
    }())
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Function Name",
    value: formData.functionName,
    onChange: e => handleInputChange('functionName', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Group",
    value: formData.group,
    onChange: e => handleInputChange('group', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Business",
    value: formData.business,
    onChange: e => handleInputChange('business', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Assessment Lead",
    value: formData.assessmentLead,
    onChange: e => handleInputChange('assessmentLead', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Assessment ID",
    value: formData.assessmentID,
    onChange: e => handleInputChange('assessmentID', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Maturity",
    value: formData.maturity,
    onChange: e => handleInputChange('maturity', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    placeholder: "Assessment Date",
    value: formData.assessmentDate,
    onChange: e => handleInputChange('assessmentDate', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Status:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "status",
    value: "Published",
    checked: formData.status === 'Published',
    onChange: e => handleInputChange('status', e.target.value),
    required: true
  }), "Published"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "status",
    value: "In Progress",
    checked: formData.status === 'In Progress',
    onChange: e => handleInputChange('status', e.target.value),
    required: true
  }), "In Progress"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "status",
    value: "Pending",
    checked: formData.status === 'Pending',
    onChange: e => handleInputChange('status', e.target.value),
    required: true
  }), "Pending"))), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Actions",
    value: formData.actions,
    onChange: e => handleInputChange('actions', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Assessment Type",
    value: formData.assessmentType,
    onChange: e => handleInputChange('assessmentType', e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")))), /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      backgroundColor: '#f9f9f9'
    },
    value: filters[col] || '',
    onChange: e => handleFilterChange(col, e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, col), [...new Set(data.map(row => row[col]))].map(val => /*#__PURE__*/React.createElement("option", {
    key: val,
    value: val
  }, val)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      maxHeight: '400px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col
  }, col)))), /*#__PURE__*/React.createElement("tbody", null, filteredData.map((row, rowIndex) => /*#__PURE__*/React.createElement("tr", {
    key: rowIndex
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col
  }, row[col]))))))));
}