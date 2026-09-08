import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '현은빈 | Robotics & Physical AI',
  description: 'Computer Vision, Edge AI, ROS 2를 연결해 실제로 작동하는 로봇 시스템을 만드는 현은빈의 포트폴리오입니다.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
