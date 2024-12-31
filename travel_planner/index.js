var map = new BMapGL.Map('container');

// 创建城市选择控件
var cityControl = new BMapGL.CityListControl({
    // 控件的停靠位置（可选，默认左上角）
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // 控件基于停靠位置的偏移量（可选）
    offset: new BMapGL.Size(10, 5)
});

let curCityName = '北京市';
let curAddress = '北京市海淀区上地10街';
let curPoint = null;
// 将控件添加到地图上
map.addControl(cityControl);

map.centerAndZoom(new BMapGL.Point(116.331398, 39.897445), 12);
//创建地址解析器实例
var myGeo = new BMapGL.Geocoder();


myGeo.getPoint('北京市海淀区上地10街', function (point) {
    if (point) {
        map.centerAndZoom(point, 16);
        map.addOverlay(new BMapGL.Marker(point, { title: '北京市海淀区上地10街' }))
        curPoint = point;
    } else {
        alert('您输入的地址没有解析到结果！');
    }
}, '北京市')

map.addEventListener('click', function (e) {
    myGeo.getLocation(e.latlng, function (result) {
        // 弹窗询问是否添加到景点列表
        if (confirm(`${result.address}：${e.latlng.lng.toFixed(4)},${e.latlng.lat.toFixed(4)} 是否添加到景点列表？`)) {
            curPoint = e.latlng;
            curAddress = result.address;
            addPoi();
        }
    });
})

// 添加回车键处理函数
function handleKeyPress(e) {
    if (e.keyCode === 13 || e.which === 13) {  // 13 是回车键的键码
        search();
    }
}

// 注意：这里需要实现 search 函数
function search() {
    var address = document.getElementById('search').value;
    curAddress = address;
    var city = document.getElementById('cur_city_namemz_0').textContent;
    curCityName = city;
    myGeo.getPoint(address, function (point) {
        if (point) {
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMapGL.Marker(point, { title: address }))
            curPoint = point;
        } else {
            alert('您选择的地址没有解析到结果！');
        }
    }, city);
}

// 添加POI
function addPoi() {
    map.addOverlay(new BMapGL.Marker(curPoint, { title: curAddress }))
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (confirm(`是否删除${li.address}？`)) {
            deletePoi(li);
        }
    });
    li.textContent = `${curAddress}: ${curPoint.lng.toFixed(4)},${curPoint.lat.toFixed(4)}`;
    li.address = curAddress;
    li.point = curPoint;
    li.appendChild(deleteBtn);

    li.addEventListener('click', function () {
        map.centerAndZoom(this.point, 16);
        map.addOverlay(new BMapGL.Marker(this.point, { title: this.textContent }))
    });
    document.getElementById('pois').appendChild(li);
}

// 删除POI
function deletePoi(li) {
    document.getElementById('pois').removeChild(li);
}

// 生成路线
function createRoute() {
    //清除所有路线
    map.clearOverlays();
    if (document.getElementById('pois').children.length < 2) {
        alert('请至少添加两个景点！');
        return;
    }
    var pois = document.querySelectorAll('#pois > li');
    var waypoints = [];
    var start = pois[0].point;
    var end = pois[pois.length - 1].point;
    for (var i = 0; i < pois.length; i++) {
        waypoints.push(pois[i].point);
    }
    var driving = new BMapGL.DrivingRouteLine(map, {
        renderOptions: {
            map: map,
            autoViewport: true,
            enableDragging: true,
        }
    })
    driving.search(start, end, {
        waypoints
    });
}
