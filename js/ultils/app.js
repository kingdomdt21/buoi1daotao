import { datacandidates } from "./candidate-data.js";

function formatCell(data){
    return data ? data : '--';
}

function formatDate(dateString){
    if(!dateString){
        return '--';
    }
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}

function renderTable(data){
    const tableBody = document.getElementById('candidate-list-body');
    if (!tableBody) {
        console.error("Không tìm thấy <tbody>!");
        return;
    }
    const rowsHTML = data.map(candidate => {
        
        return `
            <tr>
                <td><input type="checkbox"></td>
                
                <td>
                    <div class="candidate-info">
                        <div class="avatar">${candidate.Avatar}</div>
                        <div class="name">${candidate.CandidateName}</div>
                    </div>
                </td>
                
                <td>${formatCell(candidate.Mobile)}</td>
                <td>${formatCell(candidate.Email)}</td>
                <td>${formatCell(candidate.RecruitmentCampaignNames)}</td>
                <td>${formatCell(candidate.JobPositionName)}</td>
                <td>${formatCell(candidate.RecruitmentRoundName)}</td>
                <td>${formatDate(candidate.ApplyDate)}</td>
                <td>${formatCell(candidate.Score)}</td>
           
            </tr>
        `;
    });
    tableBody.innerHTML = rowsHTML.join(''); 
}
document.addEventListener('DOMContentLoaded', function() {
   
    renderTable(datacandidates);
});