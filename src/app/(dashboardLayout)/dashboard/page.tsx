import Wellcome from '@/app/components/DashboardCompo/AllBox/Wellcome'
import Incress from '@/app/components/DashboardCompo/AllBox/Incress'
import ChannelRevenue from '@/app/components/DashboardCompo/AllBox/ChannelRevenue'
import TotalProfit from '@/app/components/DashboardCompo/AllBox/TotalProfit'

const DashboardPage = () => {
  return (
    <div>
      <Wellcome />
      <Incress />
      <div className="">
        <TotalProfit />
        <ChannelRevenue />
      </div>
    </div>
  )
}

export default DashboardPage