function init() {
  var data = [{
    
    values: [19.5, 6.4, 124.8, 29.6, 7.6, 16.6, 18.3, 38.0, 4.5, 16.6, 13.1, 8.3, 57.5, 22.1, 18.4, 11.6, 11.0, 12.8,
 99.1, 6.4, 14.5, 26.8],
    labels: ['bladder', 'brain', 'breast', 'breast_insitu', 'cervix', 'child_less_15years', 'child_less_20years',
 'colon_rectum', 'esophagus', 'kidney', 'leukemia', 'liver', 'lung', 'melanoma', 'non_HodgkinLymphoma',
 'oral_pharynx', 'ovary', 'pancreas', 'prostate', 'stomach', 'thyroid', 'uterus'],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
  var PIE = document.getElementById("pie");
  Plotly.restyle(PIE, "values", [newdata]);
}

function getData(dataset) {
  var data = [];
  switch (dataset) {
  case "dataset1":
    data = [18.1, 6.3, 123.3, 26.4, 9.4, 16.5, 18.2, 42.7, 4.7, 17.9, 12.0, 7.6, 63.6, 22.4, 16.1, 13.2, 11.2, 12.9, 118.7, 6.4, 9.9, 19.9];
    break;
  case "dataset2":
    data = [24.1, 7.1, 122.0, 28.8, 8.2, 14.2, 15.3, 42.5, 4.8, 19.0, 10.9, 7.7, 53.5, 12.1, 17.8, 11.0, 9.3,
 10.0, 61.0, 9.0, 9.9, 24.0];
    break;
   case "dataset3":
    data = [18.5, 5.7, 110.9, 24.3, 7.3, 18.3, 19.2, 31.8, 3.9, 15.4, 11.3, 7.8, 46.5, 23.3, 14.8, 9.2, 9.9, 11.0, 78.0, 5.1, 13.5, 23.6];
    break;
   case "dataset4":
    data = [18.2, 6.2, 117.1, 27.6, 10.4, 15.7, 16.7, 45.0, 4.2, 19.2, 13.6, 7.2, 77.3, 22.3, 16.9, 13.9, 12.0, 11.8,
 115.0, 6.7, 13.7, 23.8];
    break;
   case "dataset5":
    data = [16.2, 5.9, 121.4, 27.8, 7.1, 17.3, 18.9, 35.0, 3.5, 14.9, 11.8, 9.7, 41.0, 22.9, 18.1, 10.3, 11.5, 11.6,
 87.1, 7.2, 13.3, 25.8];
    break;
   case "dataset6":
    data = [17.3, 6.8, 123.4, 26.4, 6.3, 15.2, 17.0, 32.9, 4.4, 13.8, 12.1, 7.3, 40.5, 21.2, 17.1, 11.2, 9.8, 10.4,
 81.6, 5.4, 14.3, 20.9];
    break;    
   case "dataset7":
    data = [25.8, 7.2, 143.9, 43.0, 6.0, 16.4, 17.1, 35.3, 4.9, 16.1, 12.5, 8.3, 57.2, 20.6, 21.9, 12.2, 12.2, 13.8,
 108.8, 7.8, 17.9, 29.3];
    break;  
    case "dataset8":
    data = [24.6, 5.1, 136.2, 36.6, 8.3, 18.3, 19.6, 39.4, 5.3, 16.5, 12.7, 7.7, 71.8, 29.5, 19.3, 13.1, 8.9, 14.8,
 124.5, 7.2, 14.2, 32.4];
    break;
   case "dataset9":
    data = [11.1, 2.6, 121.1, 38.7, 8.9, 14.9, 17.3, 31.0, 4.0, 10.1, 7.3, 12.8, 42.5, 7.8, 12.7, 10.1, 12.5, 17.2,
 103.2, 8.1, 12.1, 26.9];
    break;
   case "dataset10":
    data = [17.7, 6.3, 113.8, 26.1, 8.7, 18.7, 20.0, 34.9, 4.3, 14.4, 11.9, 7.9, 54.9, 23.7, 16.6, 12.8, 10.7, 12.4,
 78.2, 5.4, 12.5, 23.9];
    break;
   case "dataset11":
    data = [18.0, 6.1, 126.4, 28.3, 8.1, 16.6, 18.0, 41.7, 4.2, 16.5, 13.5, 8.1, 60.5, 27.1, 18.3, 13.1, 10.6, 13.0,
 115.2, 6.5, 12.5, 23.7];
    break;    
   case "dataset12":
    data = [14.7, 4.1, 134.8, 36.2, 6.5, 14.2, 15.4, 41.3, 3.5, 14.8, 10.0, 10.8, 43.8, 23.1, 14.9, 12.6, 9.9, 13.6,
 87.4, 8.1, 14.7, 30.1];
    break;           
   case "dataset13":
    data = [20.0, 8.8, 124.7, 23.3, 5.7, 16.1, 18.3, 35.3, 4.2, 16.1, 16.5, 7.7, 49.7, 28.0, 19.7, 12.5, 10.3, 14.2,
 98.7, 6.0, 15.6, 24.9];
    break;
   case "dataset14":
    data = [21.7, 6.5, 134.5, 32.6, 7.2, 15.5, 18.1, 42.8, 5.0, 18.1, 13.0, 7.9, 64.0, 20.6, 19.7, 12.3, 11.5, 13.8,
 106.8, 7.3, 16.1, 29.8];
    break;
   case "dataset15":
    data = [20.9, 6.1, 121.3, 27.4, 8.6, 18.1, 19.0, 41.6, 5.3, 18.7, 13.0, 6.6, 72.3, 20.5, 18.6, 12.4, 9.9, 13.3,
 83.3, 5.8, 13.0, 28.5];
    break;
   case "dataset16":
    data = [21.5, 6.6, 129.0, 28.6, 7.2, 18.8, 20.6, 43.6, 5.6, 18.8, 15.6, 6.2, 62.7, 26.5, 21.5, 13.6, 9.6, 12.5,
 103.4, 5.0, 14.8, 29.6];
    break;    
      case "dataset17":
    data = [19.5, 6.5, 129.7, 25.9, 9.0, 18.7, 19.2, 38.3, 4.3, 18.9, 15.7, 6.9, 58.8, 25.3, 19.0, 12.1, 10.5, 12.2,
 101.8, 4.9, 16.7, 28.4];
    break;  
   case "dataset18":
    data = [21.6, 7.6, 126.8, 26.1, 9.4, 18.0, 19.2, 48.4, 4.8, 20.7, 15.5, 8.6, 89.6, 27.1, 18.8, 13.4, 10.6, 13.7,
 99.2, 6.6, 16.5, 27.4];
    break;
   case "dataset19":
    data = [17.5, 6.1, 126.6, 26.4, 9.8, 16.1, 19.3, 44.4, 4.6, 21.1, 14.4, 10.1, 65.0, 18.8, 19.0, 12.7, 10.2, 15.2,
 125.6, 7.2, 14.7, 20.5];
    break;
   case "dataset20":
    data = [25.6, 7.6, 124.5, 30.0, 5.7, 16.0, 20.7, 35.7, 7.0, 17.0, 15.0, 5.6, 69.7, 28.0, 21.0, 13.9, 8.3, 12.4, 88.3,
 5.1, 15.6, 30.9];
    break;
   case "dataset21":
    data = [21.7, 5.6, 131.4, 30.7, 6.8, 13.7, 16.9, 36.0, 4.8, 15.1, 11.5, 8.0, 55.5, 25.8, 16.4, 11.1, 11.9, 13.0,
 118.3, 6.6, 14.2, 28.7];
    break;    
   case "dataset22":
    data = [23.0, 6.8, 137.7, 39.1, 5.1, 17.1, 18.5, 35.5, 5.2, 16.8, 12.1, 7.8, 61.8, 18.0, 18.9, 12.3, 11.2, 13.5,
 98.5, 6.5, 20.4, 30.1];
    break;           
   case "dataset23":
    data = [20.8, 6.2, 119.0, 29.9, 7.2, 14.8, 15.7, 35.4, 5.2, 15.0, 13.3, 6.6, 62.4, 20.2, 19.7, 11.1, 10.2, 13.4,
 102.8, 5.9, 12.4, 28.1];
    break;
   case "dataset24":
    data = [21.9, 7.6, 134.5, 29.4, 6.2, 17.8, 19.4, 38.4, 4.7, 17.5, 16.7, 7.5, 57.1, 31.6, 21.9, 11.7, 11.0, 13.6,
 111.1, 5.4, 13.0, 31.7];
    break;
   case "dataset25":
    data = [16.3, 5.1, 117.3, 25.8, 9.1, 13.3, 14.7, 48.1, 4.9, 20.3, 10.8, 8.8, 72.3, 15.5, 16.0, 11.3, 9.0, 14.6,
 126.7, 6.3, 11.2, 23.1];
    break;
   case "dataset26":
    data = [19.4, 6.7, 129.9, 27.0, 8.2, 17.2, 18.9, 39.8, 4.8, 19.1, 13.1, 7.5, 71.0, 19.8, 18.4, 12.0, 10.7, 12.2,
 90.6, 5.1, 12.1, 26.9];
    break;    
   case "dataset27":
    data = [21.8, 6.9, 130.1, 25.2, 7.3, 10.6, 11.1, 38.9, 5.8, 15.9, 14.1, 6.4, 52.1, 25.2, 16.5, 10.9, 11.2, 12.5,
 107.8, 3.9, 15.0, 22.6];
    break;  
   case "dataset28":
    data = [21.0, 6.8, 127.7, 28.3, 7.8, 15.6, 16.6, 42.8, 4.6, 18.7, 12.1, 5.9, 57.1, 25.6, 19.8, 12.0, 11.0, 13.2,
 109.3, 5.3, 14.8, 28.3];
    break;
   case "dataset29":
    data = [18.3, 6.1, 104.7, 19.9, 8.7, 18.4, 20.0, 32.3, 3.6, 14.4, 10.6, 5.2, 46.6, 11.6, 12.8, 10.0, 9.5, 10.3,
 69.5, 4.4, 14.8, 21.6];
    break;
   case "dataset30":
    data = [25.8, 7.0, 145.9, 35.1, 6.1, 16.1, 18.9, 36.0, 7.6, 14.5, 11.9, 6.1, 62.1, 31.6, 20.0, 11.6, 9.1, 10.9,
 98.7, 4.9, 15.0, 30.0];
    break;
   case "dataset31":
    data = [23.5, 6.5, 134.8, 40.3, 8.1, 16.0, 18.4, 40.5, 4.3, 16.3, 14.9, 7.5, 55.2, 22.2, 22.1, 10.7, 12.2, 13.9,
 127.2, 8.0, 18.6, 31.3];
    break;    
   case "dataset32":
    data = [15.0, 5.5, 107.8, 19.3, 7.9, 16.3, 18.0, 31.7, 3.9, 14.9, 14.7, 11.0, 38.2, 16.0, 13.9, 7.8, 12.8, 11.4,
 72.6, 6.5, 16.7, 23.5];
    break;          
   case "dataset33":
    data = [22.7, 6.6, 134.0, 42.2, 7.8, 18.1, 20.4, 38.7, 4.6, 16.7, 15.7, 8.9, 59.2, 17.7, 21.4, 11.2, 12.1, 14.0,
 121.9, 8.5, 20.5, 31.8];
    break;
   case "dataset34":
    data = [19.0, 6.4, 132.6, 28.2, 6.9, 15.6, 17.9, 37.3, 3.9, 16.5, 13.2, 8.5, 67.2, 26.8, 17.6, 12.8, 10.6, 12.9,
 111.6, 6.0, 12.6, 25.5];
    break;
   case "dataset35":
    data = [17.5, 5.8, 133.1, 28.3, 0, 15.2, 17.5, 42.4, 4.4, 17.7, 16.8, 3.0, 54.4, 25.8, 17.8, 10.6, 9.8, 11.8,
 125.0, 5.3, 16.7, 24.2];
    break;
   case "dataset36":
    data = [21.5, 6.9, 127.9, 29.8, 7.8, 17.4, 19.8, 42.3, 5.2, 17.4, 11.6, 6.9, 67.2, 25.4, 19.3, 12.1, 11.0, 12.9,
 99.2, 6.1, 15.0, 30.5];
    break;    
   case "dataset37":
    data = [19.2, 6.5, 121.5, 24.0, 8.5, 14.4, 16.4, 40.8, 3.9, 21.0, 13.5, 7.9, 66.8, 21.5, 17.4, 12.2, 10.6, 11.3,
 93.4, 5.2, 13.3, 24.4];
    break;  
   case "dataset38":
    data = [20.0, 6.8, 115.6, 23.6, 7.0, 17.7, 20.1, 31.9, 4.4, 14.7, 11.7, 8.8, 48.9, 25.8, 15.7, 11.8, 11.3, 12.6,
 86.2, 5.3, 13.5, 26.1];
    break;
   case "dataset39":
    data = [23.6, 6.8, 131.3, 33.0, 7.4, 17.0, 19.3, 41.9, 5.2, 17.5, 14.4, 8.8, 63.2, 25.7, 20.9, 11.6, 11.6, 14.8,
 104.5, 6.0, 19.4, 32.8];
    break;
   case "dataset40":
    data = [23.5, 6.6, 136.6, 31.4, 7.2, 18.2, 19.4, 31.8, 4.6, 15.7, 13.3, 7.3, 69.2, 23.5, 20.3, 11.6, 10.1, 10.8,
 94.3, 7.4, 19.1, 26.1];
    break;
   case "dataset41":
    data = [19.0, 6.6, 129.9, 30.6, 8.1, 14.7, 16.2, 39.7, 4.6, 17.7, 12.5, 8.2, 64.5, 22.5, 16.1, 11.7, 9.3, 13.2,
 116.3, 6.8, 11.1, 23.5];
    break;    
   case "dataset42":
    data = [19.3, 5.8, 127.4, 26.3, 5.4, 0, 12.9, 40.0, 3.8, 13.9, 15.6, 8.3, 56.0, 24.4, 16.3, 10.0, 9.4, 10.9, 113.4,
 5.1, 13.9, 27.9]
;
    break;                 
   case "dataset43":
    data = [19.4, 6.0, 122.2, 24.6, 8.2, 15.6, 16.5, 39.7, 4.7, 18.4, 12.5, 8.4, 76.6, 21.9, 17.0, 12.8, 10.6, 12.3,
 107.9, 5.7, 13.4, 25.1];
    break;
   case "dataset44":
    data = [14.2, 6.1, 112.2, 23.6, 9.1, 16.6, 17.8, 37.5, 3.9, 18.3, 13.1, 11.6, 49.3, 13.0, 16.5, 11.0, 10.5, 12.4,
 86.5, 6.6, 11.9, 21.8];
    break;
   case "dataset45":
    data = [16.3, 7.1, 113.4, 21.4, 5.0, 17.2, 19.5, 27.9, 2.6, 13.4, 12.5, 6.8, 25.5, 40.5, 18.7, 11.0, 11.5, 10.9,
 113.2, 4.6, 19.5, 27.0];
    break;
   case "dataset46":
    data = [20.7, 5.0, 130.5, 27.8, 0, 16.4, 19.9, 33.8, 5.5, 12.8, 11.3, 4.8, 60.4, 35.8, 21.5, 12.4, 11.1, 9.5, 82.5,
 3.7, 14.9, 35.6];
    break;    
   case "dataset47":
    data = [17.5, 5.4, 124.5, 32.2, 5.8, 12.4, 13.8, 33.7, 4.1, 15.2, 10.1, 7.7, 55.0, 18.6, 16.7, 10.7, 10.9, 11.9,
 94.8, 6.7, 12.7, 25.4];
    break;  
   case "dataset48":
    data = [21.1, 7.8, 132.0, 32.4, 6.8, 17.7, 20.2, 33.5, 4.9, 14.9, 13.7, 8.8, 52.8, 26.1, 19.2, 11.6, 11.1, 12.1,
 91.7, 5.1, 13.3, 25.1];
    break;
   case "dataset49":
    data = [20.8, 7.0, 119.6, 22.0, 8.2, 15.3, 16.0, 47.1, 5.9, 20.3, 14.5, 7.3, 77.4, 20.8, 19.0, 13.0, 12.4, 10.7,
 88.1, 5.2, 16.1, 31.1];
    break;
   case "dataset50":
    data = [21.4, 6.7, 129.0, 32.2, 7.3, 15.0, 16.9, 35.8, 5.4, 17.5, 15.8, 7.2, 57.4, 23.6, 20.6, 12.5, 11.5, 13.4,
 107.1, 5.9, 13.9, 32.6];
    break;
   case "dataset51":
    data = [21.5, 7.2, 104.0, 18.1, 0, 14.2, 14.0, 30.3, 4.8, 12.7, 14.4, 7.7, 42.4, 23.0, 17.9, 8.5, 12.2, 11.8,
 96.7, 3.8, 18.2, 22.8];
    break;    
   case "dataset52":
    data = [10.0, 3.8, 93.1, 21.1, 13.2, 17.5, 18.8, 41.8, 2.9, 9.4, 10.5, 8.2, 16.6, 3.1, 15.0, 10.4, 7.9, 7.9,
 144.7, 8.2, 33.4, 27.3];
    break;                     
        
     
          
  default:
    data = [10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30,
  30, 30, 30, 30];
  }
  updatePlotly(data);
}

init();
