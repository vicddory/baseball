// 좌/우투 및 플래툰 상세 데이터
const platoonData = {
    lefty: {
        visualTitle: "좌투수의 릴리스 앵글",
        img: "assets/images/lefty_angle.jpg",
        title: "좌투수의 희귀성과 각도의 마법",
        principle: "우타자 위주의 야구 생태계에서 좌투수는 1루 견제가 쉽고, 좌타자의 등 뒤에서 공이 날아오는 듯한 착시를 줍니다.",
        pov: "좌타자 입장에서는 공이 자신의 몸을 향해 날아오다 스트라이크 존으로 들어오는 궤적으로 보여 심리적 압박감을 느킵니다.",
        value: "리그 전체 투수 중 좌투수의 비율이 낮아, 타자들이 궤적에 익숙해질 절대적인 타석 수가 부족합니다."
    },
    righty: {
        visualTitle: "우투수의 구위와 인프라",
        img: "assets/images/righty_angle.jpg",
        title: "압도적인 표본과 구속의 우위",
        principle: "인구통계학적으로 우완이 압도적으로 많기 때문에, 투수들의 평균 구속이나 변화구 완성도 등 전반적인 '구위'의 평균치가 높습니다.",
        pov: "우타자 기준에서 가장 익숙한 궤적이지만, 반대로 우투수 입장에서는 우타자 몸쪽을 과감하게 찌르는 투심/슬라이더 조합이 위력적입니다.",
        value: "좌투수에 비해 희귀성은 떨어지지만, 강력한 구속과 회전수로 타자를 압도하는 정통파 투수가 많습니다."
    },
    platoonEffect: {
        visualTitle: "플래툰 타율 히트맵",
        img: "assets/images/platoon_heatmap.jpg",
        title: "동일 손 타자 vs 반대 손 타자",
        principle: "일반적으로 투수는 같은 손을 쓰는 타자에게 강하고, 반대 손을 쓰는 타자에게 약하다는 야구의 오랜 통계적 법칙입니다.",
        pov: "투수의 브레이킹 볼(슬라이더, 커브)은 던지는 손의 반대 방향으로 휘어집니다. 즉, 우투수의 슬라이더는 좌타자 몸쪽으로 다가오기 때문에 좌타자가 치기 쉽습니다.",
        value: " 데이터를 보면, 우투수 상대 좌타자의 타율이 우타자보다 평균 1푼~2푼 이상 높게 나타납니다."
    }
};

function updatePlatoon(type) {
    const data = platoonData[type];

    // 텍스트 업데이트
    document.getElementById("platoon-visual-title").textContent = data.visualTitle;
    document.getElementById("platoon-title").textContent = data.title;
    document.getElementById("platoon-principle").textContent = data.principle;
    document.getElementById("platoon-pov").textContent = data.pov;
    document.getElementById("platoon-value").textContent = data.value;

    // 이미지 업데이트
    document.getElementById("platoon-img").src = data.img;

    // 버튼 CSS 활성화
    const buttons = document.querySelectorAll(".platoon-selector button");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}