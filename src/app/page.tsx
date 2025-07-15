import {
  LayoutDashboard,
  LineChart,
  Search,
  ShoppingCart,
  Zap
} from 'lucide-react';

export default function Home() {
  return (
    <div className='space-y-12'>
      <section className='py-12'>
        <div className='max-w-4xl mx-auto text-center space-y-4'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            {`Hello, I'm`} <span className='text-gradient'>Hoang Minh Vu</span>
          </h1>
          <p className='text-xl text-muted-foreground'>
            Software Engineer & Web Developer
          </p>
          <div className='flex justify-center gap-4 pt-4'>
            <a
              href='#'
              className='btn-primary px-6 py-3 rounded-full'
            >
              View Projects
            </a>
            <a
              href='#'
              className='px-6 py-3 rounded-full bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 transition-colors'
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className='py-12 bg-card rounded-lg'>
        <div className='max-w-4xl mx-auto space-y-6 px-4'>
          <h2 className='text-3xl font-bold'>
            New <span className='text-gradient'>Color Palette</span> Showcase
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div className='p-6 bg-primary text-primary-foreground rounded-md'>
                Primary
              </div>
              <div className='p-6 bg-secondary text-secondary-foreground rounded-md'>
                Secondary
              </div>
              <div className='p-6 bg-accent text-accent-foreground rounded-md'>
                Accent
              </div>
            </div>

            <div className='space-y-4'>
              <div className='p-6 bg-background text-foreground border border-border rounded-md'>
                Background
              </div>
              <div className='p-6 bg-card text-card-foreground border border-border rounded-md'>
                <span>Text Main</span>
              </div>
              <div className='p-6 bg-card border border-border rounded-md'>
                <span className='text-muted-foreground'>Text Muted</span>
              </div>
            </div>
          </div>

          <div className='mt-8 p-6 rounded-md bg-card border border-border'>
            <h3 className='font-medium text-lg mb-4'>Gradient Text Example</h3>
            <p className='text-3xl font-bold'>
              Faster path to{' '}
              <span className='text-gradient'>Market Mastery</span>
            </p>
            <p className='mt-2'>
              We believe cutting-edge intelligence should be accessible,
              <br />
              actionable, and built for those who dare to lead.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Similar to Cognify Metrics */}
      <section className='py-12'>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-10'>
            Featured <span className='text-gradient'>Services</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Feature Card 1 */}
            <div className='p-8 border border-border rounded-lg bg-card'>
              <div className='mb-6 icon-glow mx-auto'>
                <LineChart />
              </div>
              <h3 className='text-xl font-semibold text-center mb-3'>
                AI-Powered Trend Analysis
              </h3>
              <p className='text-muted-foreground text-center mb-6'>
                Multi-level trend detection with more accuracy across mega,
                macro, micro, and seasonal patterns.
              </p>
              <ul className='feature-list'>
                <li className='feature-list-item'>
                  Real-time monitoring with 50+ data algorithms
                </li>
                <li className='feature-list-item'>
                  Predictive analytics with more accuracy
                </li>
                <li className='feature-list-item'>
                  Multi-level trend detection (mega, macro, micro, seasonal)
                </li>
                <li className='feature-list-item'>
                  Advanced pattern recognition
                </li>
              </ul>
            </div>

            {/* Feature Card 2 */}
            <div className='p-8 border border-border rounded-lg bg-card'>
              <div className='mb-6 icon-glow mx-auto'>
                <Search />
              </div>
              <h3 className='text-xl font-semibold text-center mb-3'>
                Advanced Keyword Intelligence
              </h3>
              <p className='text-muted-foreground text-center mb-6'>
                AI-generated keywords with search volume prediction and
                competitor analysis for maximum impact.
              </p>
              <ul className='feature-list'>
                <li className='feature-list-item'>AI powered analysis</li>
                <li className='feature-list-item'>Search volume prediction</li>
                <li className='feature-list-item'>
                  Competitor keyword analysis
                </li>
                <li className='feature-list-item'>
                  Long-tail keyword discovery
                </li>
              </ul>
            </div>

            {/* Feature Card 3 */}
            <div className='p-8 border border-border rounded-lg bg-card'>
              <div className='mb-6 icon-glow mx-auto'>
                <ShoppingCart />
              </div>
              <h3 className='text-xl font-semibold text-center mb-3'>
                E-Commerce Integration
              </h3>
              <p className='text-muted-foreground text-center mb-6'>
                Seamless integration with Shopify and WooCommerce for automated
                inventory-based insights.
              </p>
              <ul className='feature-list'>
                <li className='feature-list-item'>
                  Shopify and WooCommerce integration
                </li>
                <li className='feature-list-item'>
                  Automated inventory-based insights
                </li>
                <li className='feature-list-item'>Multi-platform management</li>
                <li className='feature-list-item'>
                  Real-time sync and updates
                </li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            {/* Feature Card 4 */}
            <div className='p-8 border border-border rounded-lg bg-card'>
              <div className='mb-6 icon-glow mx-auto'>
                <LayoutDashboard />
              </div>
              <h3 className='text-xl font-semibold text-center mb-3'>
                Business Intelligence Dashboard
              </h3>
              <p className='text-muted-foreground text-center mb-6'>
                Comprehensive analytics with real-time insights, predictive
                data, and ROI tracking.
              </p>
              <ul className='feature-list'>
                <li className='feature-list-item'>
                  Real-time analytics dashboard
                </li>
                <li className='feature-list-item'>
                  Predictive insights and forecasting
                </li>
                <li className='feature-list-item'>
                  ROI tracking and optimization
                </li>
                <li className='feature-list-item'>
                  Custom reporting and exports
                </li>
              </ul>
            </div>

            {/* Feature Card 5 */}
            <div className='p-8 border border-border rounded-lg bg-card'>
              <div className='mb-6 icon-glow mx-auto'>
                <Zap />
              </div>
              <h3 className='text-xl font-semibold text-center mb-3'>
                AI Strategy Generator
              </h3>
              <p className='text-muted-foreground text-center mb-6'>
                Automated marketing strategy creation with product development
                insights and channel optimization.
              </p>
              <ul className='feature-list'>
                <li className='feature-list-item'>
                  Marketing strategy creation
                </li>
                <li className='feature-list-item'>
                  Product development insights
                </li>
                <li className='feature-list-item'>
                  Channel optimization recommendations
                </li>
                <li className='feature-list-item'>
                  Competitive positioning analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12'>
        <div className='max-w-4xl mx-auto space-y-6 px-4'>
          <h2 className='text-3xl font-bold'>UI Components</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 bg-card rounded-lg border border-border'>
              <h3 className='font-medium text-lg mb-4'>Cards</h3>
              <div className='space-y-4'>
                <div className='p-4 bg-background rounded-md border border-border shadow-sm'>
                  <h4 className='font-medium'>Card Title</h4>
                  <p className='text-sm text-muted-foreground'>
                    Card description text
                  </p>
                </div>

                <div className='p-4 bg-primary rounded-md shadow-sm'>
                  <h4 className='font-medium text-primary-foreground'>
                    Primary Card
                  </h4>
                  <p className='text-sm text-primary-foreground/80'>
                    Primary card description
                  </p>
                </div>
              </div>
            </div>

            <div className='p-6 bg-card rounded-lg border border-border'>
              <h3 className='font-medium text-lg mb-4'>Buttons</h3>
              <div className='flex flex-wrap gap-3'>
                <button className='btn-primary'>Primary</button>
                <button className='px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90'>
                  Secondary
                </button>
                <button className='px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90'>
                  Accent
                </button>
                <button className='px-4 py-2 bg-card text-foreground border border-border rounded-md hover:bg-muted/50'>
                  Outline
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
