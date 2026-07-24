const MOBILE_MEDIA_QUERY = "(max-width: 52rem)";

const navigation = [
  {
    id: "about-this-specification",
    label: "이 명세에 관하여",
    path: "pages/about-this-specification.html",
  },
  {
    id: "contributing-to-this-specification",
    label: "이 명세에 기여하기",
    path: "pages/contributing-to-this-specification.html",
  },
  {
    id: "introduction",
    label: "소개",
    path: "pages/introduction.html",
  },
  {
    id: "scope",
    label: "1. 범위",
    path: "pages/scope.html",
  },
  {
    id: "conformance",
    label: "2. 준수성",
    path: "pages/conformance.html",
  },
  {
    id: "references",
    label: "3. 규범적 참조",
    path: "pages/references.html",
  },
  {
    label: "4. 개요",
    openByDefault: true,
    children: [
      {
        id: "web-scripting",
        label: "4.1 웹 스크립팅 언어",
        path: "pages/overview/web-scripting.html",
      },
      {
        id: "hosts-and-implementations",
        label: "4.2 호스트와 구현체",
        path: "pages/overview/hosts-and-implementations.html",
      },
      {
        id: "ecmascript-overview",
        label: "4.3 ECMAScript 개요",
        path: "pages/overview/ecmascript-overview.html",
      },
      {
        id: "terms",
        label: "4.4 용어와 정의",
        path: "pages/overview/terms.html",
      },
      {
        id: "organization-of-this-specification",
        label: "4.5 본 명세의 구성",
        path: "pages/overview/organization-of-this-specification.html",
      },
    ],
  },
  {
    label: "5. 표기 규칙",
    openByDefault: true,
    children: [
      {
        id: "grammar-notation",
        label: "5.1 문법 표기법",
        path: "pages/notational-conventions/grammar-notation.html",
      },
      {
        id: "algorithm-notation",
        label: "5.2 알고리즘 표기법",
        path: "pages/notational-conventions/algorithm-notation.html",
      },
    ],
  },
  {
    label: "6. ECMAScript 데이터 타입",
    children: [
      {
        id: "language-types",
        label: "6.1 ECMAScript 언어 타입",
        path: "pages/ecmascript-data-types-and-values/language-types.html",
      },
      {
        id: "specification-types",
        label: "6.2 명세 타입",
        path: "pages/ecmascript-data-types-and-values/specification-types.html",
      },
    ],
  },
  {
    label: "7. 추상 연산",
    children: [
      {
        id: "type-conversion",
        label: "7.1 타입 변환",
        path: "pages/abstract-operations/type-conversion.html",
      },
      {
        id: "testing-comparison",
        label: "7.2 검사와 비교 연산",
        path: "pages/abstract-operations/testing-comparison.html",
      },
      {
        id: "operations-objects",
        label: "7.3 객체에 대한 연산",
        path: "pages/abstract-operations/operations-objects.html",
      },
      {
        id: "operations-iterator",
        label: "7.4 이터레이터 객체에 대한 연산",
        path: "pages/abstract-operations/operations-iterator.html",
      },
      {
        id: "operations-disposable-objects",
        label: "7.5 폐기 가능 객체에 대한 연산",
        path: "pages/abstract-operations/operations-disposable-objects.html",
      },
    ],
  },
];

const body = document.body;
const currentPage = body.dataset.page ?? "";
const rootPath = body.dataset.rootPath ?? ".";

const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menu-button");
const sidebarOverlay = document.querySelector("#sidebar-overlay");
const navigationList = document.querySelector("#navigation-list");
const homeLink = document.querySelector("#home-link");

function resolvePath(path) {
  return `${rootPath}/${path}`;
}

function createNavigationLink(item) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");

  link.className = "navigation-link";
  link.href = resolvePath(item.path);
  link.textContent = item.label;

  if (item.id === currentPage) {
    link.setAttribute("aria-current", "page");
  }

  listItem.append(link);

  return listItem;
}

function createNavigationGroup(group) {
  const listItem = document.createElement("li");
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const sublist = document.createElement("ol");

  const containsCurrentPage = group.children.some(
    (item) => item.id === currentPage,
  );

  details.className = "navigation-group";
  details.open = Boolean(group.openByDefault || containsCurrentPage);

  summary.textContent = group.label;

  sublist.className = "navigation-sublist";

  group.children.forEach((item) => {
    sublist.append(createNavigationLink(item));
  });

  details.append(summary, sublist);
  listItem.append(details);

  return listItem;
}

function renderNavigation() {
  if (!navigationList) {
    return;
  }

  const fragment = document.createDocumentFragment();

  navigation.forEach((item) => {
    fragment.append(
      item.children ? createNavigationGroup(item) : createNavigationLink(item),
    );
  });

  navigationList.replaceChildren(fragment);

  const currentLink = navigationList.querySelector('[aria-current="page"]');

  currentLink?.scrollIntoView({
    block: "nearest",
  });
}

function setSidebarOpen(isOpen) {
  if (!sidebar || !sidebarOverlay || !menuButton) {
    return;
  }

  sidebar.dataset.open = String(isOpen);
  sidebarOverlay.dataset.open = String(isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "목차 닫기" : "목차 열기");

  document.body.style.overflow = isOpen ? "hidden" : "";
}

function initializeSidebar() {
  if (!sidebar || !sidebarOverlay || !menuButton) {
    return;
  }

  menuButton.addEventListener("click", () => {
    setSidebarOpen(sidebar.dataset.open !== "true");
  });

  sidebarOverlay.addEventListener("click", () => {
    setSidebarOpen(false);
  });

  navigationList?.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target instanceof HTMLAnchorElement &&
      window.matchMedia(MOBILE_MEDIA_QUERY).matches
    ) {
      setSidebarOpen(false);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setSidebarOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (!window.matchMedia(MOBILE_MEDIA_QUERY).matches) {
      setSidebarOpen(false);
    }
  });
}

if (homeLink) {
  homeLink.href = resolvePath("index.html");
}

renderNavigation();
initializeSidebar();
