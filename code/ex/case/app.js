function Request(id, requestOn, accessFor, team, status){
    this.id = id;
    this.ticketId = "Up - "+(9+Number(this.id));
    this.requestOn = requestOn;
    this.accessFor = accessFor;
    this.team = team;
    this.status = status;
};

let requests = [
    new Request("1", "2023-01-14", "quang.dang@codegym.vn", "Sale", "Pending"),
];

function renderRequest(){
    let str = "";
    for (let i=0;i<requests.length;i++){
        str += `<tr>
        <td>${requests[i].id}</td>
        <td>${requests[i].ticketId}</td>
        <td>${requests[i].requestOn}</td>
        <td>${requests[i].accessFor}</td>
        <td>${requests[i].team}</td>
        <td>${requests[i].status}</td>
        <td>
            <button class="btn btn-success">Approved</button>
            <button class="btn btn-danger">Reject</button>
        </td>
    </tr>`;
    }
    document.getElementById("tb-request").innerHTML = str;
}
renderRequest();

function hdCreate(){
    let requestOn = document.getElementById("requestOn").value;
    let accessFor = document.getElementById("accessFor").value;
    let team = document.getElementById("team").value;
    if (requestOn=="" || accessFor==""){
        alert("Nhập thông tin chưa chính xác")
    }else{
        console.log(requestOn + " " + accessFor + " " + team);
        let request = new Request(requests.length, requestOn, accessFor, team, "Pending");
        requests.push(request);
        renderRequest();
    }
}
