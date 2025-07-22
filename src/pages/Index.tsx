import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: string;
  title: string;
  price: number;
  sku: string;
  images: string[];
  status: 'pending' | 'approved' | 'rejected';
}

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState<'login' | 'dashboard' | 'products'>('login');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [products] = useState<Product[]>([
    {
      id: '1',
      title: 'Смартфон Apple iPhone 15',
      price: 89990,
      sku: 'APL-IP15-128GB',
      images: ['img/d80ce1f6-3a30-4c83-b522-c40a81cea7f9.jpg'],
      status: 'pending'
    },
    {
      id: '2', 
      title: 'Ноутбук MacBook Air M2',
      price: 124990,
      sku: 'APL-MBA-M2-256',
      images: ['img/d80ce1f6-3a30-4c83-b522-c40a81cea7f9.jpg'],
      status: 'pending'
    },
    {
      id: '3',
      title: 'Наушники Sony WH-1000XM5',
      price: 32990,
      sku: 'SNY-WH1000XM5-BLK',
      images: ['img/fcbf7355-d754-49eb-b14a-26861b735c3e.jpg'],
      status: 'pending'
    }
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentView('dashboard');
  };

  const handleProductAction = (productId: string, action: 'approve' | 'reject') => {
    console.log(`${action} product ${productId}`);
  };

  const LoginForm = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Вход в систему</CardTitle>
          <p className="text-gray-600 mt-2">Админ-панель управления товарами</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="admin@example.com"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Пароль</Label>
              <Input 
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
              Войти
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );

  const Sidebar = () => (
    <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white border-r border-gray-200 min-h-screen transition-all duration-300 flex flex-col`}>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Icon name="Package" size={20} className="text-white" />
          </div>
          {sidebarOpen && (
            <div className="ml-3">
              <h2 className="text-lg font-semibold text-gray-900">AdminPanel</h2>
              <p className="text-sm text-gray-500">Professional</p>
            </div>
          )}
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
              currentView === 'dashboard' 
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon name="Grid3x3" size={20} />
            {sidebarOpen && <span className="ml-3">Дашборд</span>}
          </button>
          
          <button
            onClick={() => setCurrentView('products')}
            className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
              currentView === 'products'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon name="Package" size={20} />
            {sidebarOpen && <span className="ml-3">Одобрение товаров</span>}
          </button>
          
          <button className="w-full flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Icon name="Shield" size={20} />
            {sidebarOpen && <span className="ml-3">Пользователи</span>}
          </button>
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-full flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Icon name="Menu" size={20} />
          {sidebarOpen && <span className="ml-3">Свернуть</span>}
        </button>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Дашборд</h1>
        <p className="text-gray-600 mt-2">Обзор системы управления товарами</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Icon name="Package" size={24} className="text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Всего товаров</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">На модерации</p>
                <p className="text-2xl font-bold text-gray-900">{products.filter(p => p.status === 'pending').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <Icon name="CheckCircle" size={24} className="text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Одобрено сегодня</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ProductsApproval = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Одобрение товаров</h1>
        <p className="text-gray-600 mt-2">Проверка и модерация новых товаров</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-50 flex items-center justify-center">
              <img 
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{product.title}</h3>
                  <p className="text-sm text-gray-500">Артикул: {product.sku}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    <Icon name="Clock" size={14} className="mr-1" />
                    На модерации
                  </Badge>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button 
                    onClick={() => handleProductAction(product.id, 'approve')}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <Icon name="Check" size={16} className="mr-2" />
                    Одобрить
                  </Button>
                  <Button 
                    onClick={() => handleProductAction(product.id, 'reject')}
                    variant="destructive" 
                    className="flex-1"
                  >
                    <Icon name="X" size={16} className="mr-2" />
                    Отклонить
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  if (currentView === 'login') {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'products' && <ProductsApproval />}
      </div>
    </div>
  );
};

export default AdminDashboard;