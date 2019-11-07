var data = [
    {
        name: 'Headquarter', 
        value: {
            tel: 'Tel: +86-0755-83416677', 
            cz: 'Fax: +86-0755-83416349',
            email: 'Email: MARKETING@EMPERORTECH.COM',
            address: 'Add: F9, Block C, Building 1, Software Industry Base, Nanshan District, 518055, Shenzhen, China.'
        }
    },{
        name: 'Factory', 
        value: {
            tel: 'Tel: +86-0755-28894103', 
            cz: 'Fax: +86-0755-28896670',
            email: 'Email: MARKETING@EMPERORTECH.COM',
            address: 'Add: 7/F, Building 1, Chuangxiangdi, EVOC Hi-tech Industrial Park, No. 11 Gaoxin Road, Guangming District, 518107, Shenzhen, China.'
        }
    },{
        name: 'USA Office', 
        value: {
            tel: 'Phone: +86-0755-28894103', 
            cz: 'Fax: +86-0755-28896670',
            email: 'Email: SALES@EMPERORTECH.US',
            address: 'Add: 2012 E RANDOL MILL RD STE 201, ARLINGTON, TX 76011, U.S.A.'
        }
    },{
        name: 'Indian Office', 
        value: {
            tel: 'Phone: +91 74 0018 1986', 
            cz: '',
            email: 'Email: SHELDON.SONG@EMPERORTECH.COM',
            address: 'Add: 2012 E RANDOL MILL RD STE 201, ARLINGTON, TX 76011, U.S.A.'
        }
    },{
        name: 'Nigerian Office', 
        value: {
            tel: 'Phone: +234 7057612551', 
            cz: '',
            email: 'Email: DYLAN.DENG@EMPERORTECH.COM',
            address: 'Add: 15, Ganges Street, Ministers Hill, Maitama District, Abuja, Nigeria'
        }
    }
];
var geoCoordMap = {
   'Headquarter':[113.945766,22.528735],
   'Factory': [113.931659,22.764308],
   'USA Office': [-100.061572,31.4236],
   'Indian Office': [-100.061572,31.4236],
   'Nigerian Office': [7.394135,9.076702],
};



var convertData = function (data) {
   var res = [];
   for (var i = 0; i < data.length; i++) {
       var geoCoord = geoCoordMap[data[i].name];
       if (geoCoord) {
           res.push({
               name: data[i].name,
               value: geoCoord.concat(data[i].value)
           });
       }
   }
   return res;
};

option = {
   bmap: {
       center: [104.114129, 37.550339],
       zoom: 1,
       roam: true,
       mapStyle: {
           styleJson: [{
               'featureType': 'water',
               'elementType': 'all',
               'stylers': {
                   'color': '#d1d1d1'
               }
           }, {
               'featureType': 'land',
               'elementType': 'all',
               'stylers': {
                   'color': '#f3f3f3'
               }
           }, {
               'featureType': 'railway',
               'elementType': 'all',
               'stylers': {
                   'visibility': 'off'
               }
           }, {
               'featureType': 'highway',
               'elementType': 'all',
               'stylers': {
                   'color': '#fdfdfd'
               }
           }, {
               'featureType': 'highway',
               'elementType': 'labels',
               'stylers': {
                   'visibility': 'off'
               }
           }, {
               'featureType': 'arterial',
               'elementType': 'geometry',
               'stylers': {
                   'color': '#fefefe'
               }
           }, {
               'featureType': 'arterial',
               'elementType': 'geometry.fill',
               'stylers': {
                   'color': '#fefefe'
               }
           }, {
               'featureType': 'poi',
               'elementType': 'all',
               'stylers': {
                   'visibility': 'off'
               }
           }, {
               'featureType': 'green',
               'elementType': 'all',
               'stylers': {
                   'visibility': 'off'
               }
           }, {
               'featureType': 'subway',
               'elementType': 'all',
               'stylers': {
                   'visibility': 'off'
               }
           }, {
               'featureType': 'manmade',
               'elementType': 'all',
               'stylers': {
                   'color': '#d1d1d1'
               }
           }, {
               'featureType': 'local',
               'elementType': 'all',
               'stylers': {
                   'color': '#d1d1d1'
               }
           }, {
               'featureType': 'arterial',
               'elementType': 'labels',
               'stylers': {
                   'visibility': 'off'
               }
           }, {
               'featureType': 'boundary',
               'elementType': 'all',
               'stylers': {
                   'color': '#fefefe'
               }
           }, {
               'featureType': 'building',
               'elementType': 'all',
               'stylers': {
                   'color': '#d1d1d1'
               }
           }, {
               'featureType': 'label',
               'elementType': 'labels.text.fill',
               'stylers': {
                   'color': '#999999'
               }
           }]
       }
   },
   tooltip: {
       type: 'item'
   },
   series : [
       {
           name: '所在位置',
           type: 'effectScatter',
           coordinateSystem: 'bmap',
           data: convertData(data.sort(function (a, b) {
               return b.value - a.value;
           }).slice(0, 6)),
           hoverAnimation: true,
           itemStyle: {
               normal: {
                   color: '#ea5520',
                   shadowBlur: 20,
                   shadowColor: '#333'
               }
           },
           tooltip:{
               formatter: function(params){
                   const data = params.data.value[2]
                   return `${params.name}<br>${data.tel}<br>${data.cz}<br>${data.email}<br>${data.address}`;
               }
           },
           zlevel: 1
       }
   ]
};


var myChart = echarts.init(document.getElementById('map'));
myChart.setOption(option);