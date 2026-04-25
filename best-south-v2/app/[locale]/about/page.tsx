import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('about.title'),
    description: t('about.description'),
  };
}

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen py-section-padding">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-12">
          <h1 className="font-h1 text-h1 text-center text-navy mb-6">{t('title')}</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-16 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10"></div>
          <img className="relative z-10 w-full h-96 object-cover shadow-xl" src="/company-overview.jpg" alt={t('title')} />
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-navy/20 translate-x-4 translate-y-4"></div>
        </div>

        {/* Lịch sử công ty */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-label-caps tracking-widest block mb-4">{t('history.label')}</span>
              <h2 className="font-h2 text-h2 text-navy mb-6">{t('history.title')}</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                {t('history.description1')}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {t('history.description2')}
              </p>
            </div>
            <div className="relative">
              <img className="w-full h-auto shadow-xl" src="/company-history.jpg" alt={t('history.title')} />
            </div>
          </div>
        </section>

        {/* Sứ mệnh và tầm nhìn */}
        <section className="mb-16 bg-surface-gray py-section-padding -mx-8 px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 text-navy mb-4">{t('missionVision.title')}</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>target</span>
                <h3 className="font-h3 text-h3 text-navy mb-4">{t('missionVision.mission.title')}</h3>
                <p className="font-body-md text-on-surface-variant">
                  {t('missionVision.mission.description')}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
                <h3 className="font-h3 text-h3 text-navy mb-4">{t('missionVision.vision.title')}</h3>
                <p className="font-body-md text-on-surface-variant">
                  {t('missionVision.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thống kê */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-h2 font-h2 text-navy mb-2">1000+</div>
              <div className="font-label-caps text-outline">DỰ ÁN HOÀN THÀNH</div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-h2 text-navy mb-2">15</div>
              <div className="font-label-caps text-outline">NĂM KINH NGHIỆM</div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-h2 text-navy mb-2">500+</div>
              <div className="font-label-caps text-outline">NHÂN VIÊN</div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-h2 text-navy mb-2">50+</div>
              <div className="font-label-caps text-outline">GIẢI THƯỞNG</div>
            </div>
          </div>
        </section>

        {/* Đội ngũ lãnh đạo */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-h2 text-h2 text-navy mb-4">Đội ngũ Lãnh đạo</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-surface-container rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary">person</span>
              </div>
              <h3 className="font-h3 text-h3 text-navy mb-2">Nguyễn Văn A</h3>
              <p className="font-label-caps text-primary mb-4">TỔNG GIÁM ĐỐC</p>
              <p className="font-body-md text-on-surface-variant">Với hơn 20 năm kinh nghiệm trong ngành xây dựng, ông Nguyễn Văn A dẫn dắt Best South đạt được nhiều thành tựu quan trọng.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-surface-container rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary">person</span>
              </div>
              <h3 className="font-h3 text-h3 text-navy mb-2">Trần Thị B</h3>
              <p className="font-label-caps text-primary mb-4">PHÓ TỔNG GIÁM ĐỐC</p>
              <p className="font-body-md text-on-surface-variant">Chị Trần Thị B chuyên về quản lý dự án và đảm bảo chất lượng công trình, góp phần quan trọng vào sự thành công của công ty.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-surface-container rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary">person</span>
              </div>
              <h3 className="font-h3 text-h3 text-navy mb-2">Lê Văn C</h3>
              <p className="font-label-caps text-primary mb-4">GIÁM ĐỐC KỸ THUẬT</p>
              <p className="font-body-md text-on-surface-variant">Ông Lê Văn C là chuyên gia hàng đầu về công nghệ xây dựng, luôn cập nhật và áp dụng các phương pháp tiên tiến nhất.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}