// 타격 상세 데이터 정의
const batterData = {
    swingPlane: {
        visualTitle: "스윙 궤적과 투구 궤적의 매칭",
        img: "assets/images/swing_plane.jpg",
        title: "레벨 스윙 vs 어퍼 스윙",
        principle: "투수의 공은 마운드에서 홈플레이트로 하향(약 6~10도)하며 떨어집니다. 이에 맞춰 배트를 살짝 올려치는(어퍼) 궤적이 공과 배트가 만나는 '면적(Plane Match)'을 극대화합니다.",
        data: "과거에는 '위에서 아래로 찍어라(다운 스윙)'가 정석이었지만, 현대 야구에서는 10~15도 상향하는 스윙이 강한 타구를 생산하는 이상적인 궤적으로 평가받습니다.",
        tactics: "다운 스윙은 병살타로 이어지기 쉬운 땅볼을 양산하므로, 최근 타자들은 공을 공중으로 띄우기 위해 의도적인 어퍼 스윙 훈련을 진행합니다."
    },
    launchAngle: {
        visualTitle: "발사각과 타구속도 산점도 (Barrel Zone)",
        img: "assets/images/barrel_zone.jpg", // 
        title: "가장 완벽한 타구, '배럴(Barrel)'",
        principle: "스탯캐스트 도입 이후 타격의 핵심은 '얼마나 강하게(타구속도), 어느 각도로(발사각) 띄워 보냈는가'로 완벽하게 수치화되었습니다.",
        data: "타구속도 98마일(약 158km/h) 이상, 발사각 26~30도 사이의 타구를 '배럴(Barrel)'이라고 부릅니다. 이 타구가 나오면 평균 타율은 0.500, 장타율은 1.500을 훌쩍 넘습니다.",
        tactics: "아무리 타구 속도가 빨라도 땅볼(음수 발사각)이 되면 아웃될 확률이 높습니다. 타자들은 무조건 강한 타구를 '띄우는 데' 집중합니다."
    },
    sprayChart: {
        visualTitle: "핫콜드존 및 타구 방향(Spray Chart)",
        img: "assets/images/spray_chart.jpg", // 
        title: "타자의 강점과 약점 시각화",
        principle: "스트라이크 존을 격자로 나누어 타자의 코스별 타율을 색상(붉은색=강함, 푸른색=약함)으로 보여주는 히트맵과, 타구가 필드 어디로 날아갔는지 점으로 보여주는 스프레이 차트입니다.",
        data: "당겨치기에 능한 타자(Pull Hitter)의 스프레이 차트를 보면 타구가 한쪽 필드에 쏠려 있습니다. 이는 수비측이 내야수 위치를 극단적으로 바꾸는 '수비 시프트(Shift)'의 근거가 됩니다.",
        tactics: "타자는 자신의 콜드 존(약점)으로 들어오는 유인구를 참아내고, 반대로 핫 존에 들어오는 실투를 단 한 번의 스윙으로 장타로 연결해야 합니다."
    }
};

// 버튼 클릭 시 화면 업데이트 함수
function updateBatter(type) {
    const data = batterData[type];

    // 1. 텍스트 업데이트
    document.getElementById("batter-visual-title").textContent = data.visualTitle;
    document.getElementById("batter-title").textContent = data.title;
    document.getElementById("batter-principle").textContent = data.principle;
    document.getElementById("batter-data").textContent = data.data;
    document.getElementById("batter-tactics").textContent = data.tactics;

    // 2. 이미지(JPG, GIF) 경로 업데이트
    document.getElementById("batter-img").src = data.img;

    // 3. 버튼 활성화 상태 표시 (붉은색 강조)
    const buttons = document.querySelectorAll(".batter-selector button");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}