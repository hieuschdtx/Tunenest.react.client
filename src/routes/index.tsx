import AppLayout from '@/layouts/app-layout'
import { lazy, Suspense } from 'react'
import { Outlet, Navigate, useRoutes } from 'react-router-dom'

export const HomePage = lazy(() => import('@/pages/home-page'))

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <AppLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </AppLayout>
      ),
      children: [{ element: <HomePage />, index: true }]
    },
    {
      path: '*',
      element: (
        <Navigate
          to="/404"
          replace
        />
      )
    }
  ])

  return routes
}

export default Router
