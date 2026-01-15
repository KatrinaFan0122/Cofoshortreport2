import { RefreshCw, Share2 } from "lucide-react";
import cofoLogo from "figma:asset/4b6a5324c6357499ebd945a3acc45713d971ffe3.png";
import brandBadge from "figma:asset/6b8b8ed309842da9d15e7129bf128cd8864b0c6c.png";

interface MetricBar {
  label: string;
  leftLabel: string;
  rightLabel: string;
  value: number; // 0-100
  gradient: string;
}

interface InfoSection {
  label: string;
  content: string;
}

interface ReportCardProps {
  image?: string;
  code?: string;
  brandName: string;
  brandLogo?: string;
  level: number;
  identity: string;
  subtitle: string;
  sections: InfoSection[];
}

export function StartupReportCard({
  image,
  code,
  brandName,
  brandLogo,
  level,
  identity,
  subtitle,
  sections,
}: ReportCardProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100/80 via-purple-100/60 to-blue-100/60 p-8 shadow-2xl backdrop-blur-sm">
      {/* 背景装饰波浪 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.3) 20px,
            rgba(255, 255, 255, 0.3) 40px
          )`
        }}></div>
      </div>

      {/* 内容卡片 */}
      <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* 左侧图片区域 */}
          <div className="lg:w-2/5 p-8 bg-gradient-to-br from-gray-50/50 to-white/50 flex items-center justify-center">
            <div className="relative">
              {image ? (
                <div className="relative w-full max-w-sm">
                  <img
                    src={image}
                    alt={identity}
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-16 h-16 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 右侧信息区域 */}
          <div className="lg:w-3/5 p-8 lg:p-10 relative">
            {/* 顶部品牌信息 */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                {brandLogo && (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <img src={brandLogo} alt={brandName} className="w-8 h-8" />
                  </div>
                )}
                <div>
                  {code && (
                    <div className="flex gap-2 mt-1">
                      <span className="text-gray-400 text-sm">Identity No.</span>
                      <span className="text-gray-500 text-sm">{code}</span>
                    </div>
                  )}
                  <div className="mt-2">
                    <img src={brandBadge} alt="续庆・战略总裁" className="h-9" />
                  </div>
                </div>
              </div>
              
              {/* 右上角标识 */}
              <div className="flex flex-col items-center gap-1">
                <img src={cofoLogo} alt="Co-Fo" className="w-16 h-16" />
                <span className="text-gray-600 text-sm font-medium">Co-Fo</span>
              </div>
            </div>

            {/* 昵称区域 */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400 text-sm uppercase">NickName</span>
                <span className="text-gray-800 text-base">李小明</span>
              </div>
            </div>

            {/* 身份标题 */}
            <div className="mb-6">
              <div className="text-gray-400 text-sm mb-1 uppercase">Identity</div>
              <h1 className="text-3xl lg:text-4xl font-medium mb-2">{identity}</h1>
              <p className="text-gray-500">{subtitle}</p>
            </div>

            {/* 信息段落 */}
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={index}>
                  <div className="text-sm text-cyan-600 mb-1 uppercase tracking-wide">
                    {section.label}
                  </div>
                  <div className="text-gray-800">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}