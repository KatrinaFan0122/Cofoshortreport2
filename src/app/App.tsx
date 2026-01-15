import { StartupReportCard } from "@/app/components/StartupReportCard";
import expertImage from "figma:asset/452590c7d61e4acdf418e863397ceec4a975da46.png";

export default function App() {
  // 示例数据 - 知识领主
  const reportData1 = {
    image: expertImage,
    brandName: "创业云图谱",
    code: "2016050370872646",
    level: 8,
    identity: "知识领主",
    subtitle: "也是深度专家型创业者",
    sections: [
      {
        label: "核心贡献 / CONTRIBUTION",
        content: "[Lifestyle] + [Super Solo] + [Skill] + [Optimizer]",
      },
      {
        label: "商业模式 / BUSINESS MODEL",
        content: "擅长「咨询顾问」才是正经事",
      },
      {
        label: "战略定位 / STRATEGY",
        content: "绿区战略稳定，现金为王，注意保护个人品牌",
      },
    ],
  };

  // 示例数据 - 生态构建者
  const reportData2 = {
    brandName: "创业云图谱",
    code: "2024011588901234",
    level: 6,
    identity: "生态构建者",
    subtitle: "也是平台型创业领袖",
    sections: [
      {
        label: "核心贡献 / CONTRIBUTION",
        content: "云村「5%连接+2%共创」由你贡献",
      },
      {
        label: "商业模式 / BUSINESS MODEL",
        content: "擅长「搭建平台」让参与者共赢",
      },
      {
        label: "战略定位 / STRATEGY",
        content: "蓝区潜力发展，构建网络效应，关注用户增长",
      },
    ],
  };

  // 示例数据 - 效率专家
  const reportData3 = {
    brandName: "创业云图谱",
    code: "2023092156734521",
    level: 5,
    identity: "效率专家",
    subtitle: "也是系统化运营高手",
    sections: [
      {
        label: "核心贡献 / CONTRIBUTION",
        content: "云村「4%效率+3%系统」由你贡献",
      },
      {
        label: "商业模式 / BUSINESS MODEL",
        content: "擅长「精益流程」降本增效",
      },
      {
        label: "战略定位 / STRATEGY",
        content: "黄区需要优化，寻找市场差异化机会",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4 font-medium bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            创业身份认证
          </h1>
          <p className="text-gray-600">基于多维度评估的创业者画像分析</p>
        </div>

        <StartupReportCard {...reportData1} />
        <StartupReportCard {...reportData2} />
        <StartupReportCard {...reportData3} />
      </div>
    </div>
  );
}