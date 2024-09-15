import { Suspense } from 'react';
import ClientSearchWrapper from '../components/ClientSearchWrapper';

export default function SearchPage() {
    return (
        <Suspense fallback={<div>페이지 로딩 중...</div>}>
            <ClientSearchWrapper />
        </Suspense>
    );
}