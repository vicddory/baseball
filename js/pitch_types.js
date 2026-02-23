// 구종별 상세 데이터 정의
const pitchData = {
    fourSeam: {
        name: "포심 패스트볼 (Four-seam Fastball)",
        grip: "assets/images/fourseam_grip.jpg",
        trajectory: "assets/animations/fourseam_traj.gif",
        desc: "가장 기본적이고 빠른 공. 강력한 백스핀이 걸려 공이 덜 떨어지며 홈플레이트를 통과합니다.",
        movement: "상하 무브먼트가 커서 타자 입장에서는 공이 떠오르는 듯한 '라이징(Rising)' 착각을 일으킵니다.",
        purpose: "스트라이크 카운트를 선점하거나, 타자의 헛스윙을 유도하는 강력한 결정구."
    },
    slider: {
        name: "슬라이더 (Slider)",
        grip: "assets/images/slider_grip.jpg",
        trajectory: "assets/animations/slider_traj.gif",
        desc: "직구처럼 날아가다 홈플레이트 근처에서 타자 바깥쪽으로 빠르고 날카롭게 휘어지는 변화구.",
        movement: "우투수 기준, 우타자 바깥쪽 하단으로 빠르게 흘러나가는 횡/종 무브먼트를 가집니다.",
        purpose: "우타자의 헛스윙 유도 및 땅볼 타구 생산에 가장 널리 쓰이는 변화구."
    },
    curveball: {
        name: "커브 (Curveball)",
        grip: "assets/images/curveball_grip.jpg",
        trajectory: "assets/animations/curveball_traj.gif",
        desc: "강한 탑스핀(Top-spin)을 걸어 큰 포물선을 그리며 위에서 아래로 떨어지는 변화구.",
        movement: "수직 무브먼트(낙폭)가 가장 크며, 직구에 비해 구속이 훨씬 느려 타이밍을 뺏기 좋습니다.",
        purpose: "타자의 시선을 흩트리거나 타이밍을 완벽히 뺏기 위한 브레이킹 볼."
    },
    changeup: {
        name: "체인지업 (Changeup)",
        grip: "assets/images/changeup_grip.jpg",
        trajectory: "assets/animations/changeup_traj.gif",
        desc: "직구와 똑같은 팔 스윙으로 던지지만, 공을 쥐는 그립에 의해 구속을 떨어뜨리는 구종.",
        movement: "직구인 줄 알고 스윙하지만 공이 늦게 도착하며, 타자 앞쪽에서 살짝 가라앉습니다.",
        purpose: "주로 반대 손 타자(우투수 vs 좌타자)의 타이밍을 뺏고 헛스윙을 유도할 때 효과적."
    }
};

// 버튼 클릭 시 화면 업데이트 함수
function updatePitchType(pitchKey) {
    const data = pitchData[pitchKey];

    // 1. 텍스트 데이터 업데이트
    document.getElementById("pitch-name").textContent = data.name;
    document.getElementById("pitch-desc").textContent = data.desc;
    document.getElementById("pitch-movement").textContent = data.movement;
    document.getElementById("pitch-purpose").textContent = data.purpose;

    // 2. 시각 자료(JPG, GIF) 경로 업데이트
    document.getElementById("grip-img").src = data.grip;
    document.getElementById("trajectory-gif").src = data.trajectory;

    // 3. 버튼 활성화 상태 표시 (CSS 연동)
    const buttons = document.querySelectorAll(".pitch-selector button");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}